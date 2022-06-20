<template>
  <div>
    <div class="navbar">
      <navbar />
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">首頁</li>
      </ol>
    </nav>
    <div>
      <b-table
        class="text-center"
        thead-class="thClass"
        small
        responsive="sm"
        ref="selectableTable"
        striped
        bordered
        :fields="fields"
        :filter="filter"
        :items="list"
        :per-page="perPage"
        :current-page="currentPage"
        fixed
      >
        <template #cell(type)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(totalOutputAmount)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(totalInputAmount)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <!-- <template v-slot:cell(actions)="{ item }">
          <span><b-btn @click="editItem(item)">撮合</b-btn></span>
        </template> -->
      </b-table>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { ethContract } from '@/service/index.js'

export default {
  name: 'HomePage',
  data () {
    return {
      perPage: 16,
      currentPage: 1,
      // sortBy: null,
      // sortDesc: false,
      fields: [
        {
          key: 'type',
          label: '土質種類',
          tdClass: 'align-middle'
        },
        {
          key: 'totalOutputAmount',
          label: '總出土數量',
          tdClass: 'align-middle'
        },
        {
          key: 'totalInputAmount',
          label: '總需土數量',
          tdClass: 'align-middle'
        }
        // {
        //   key: 'actions',
        //   label: '操作',
        //   tdClass: 'align-middle'
        // }
      ],
      list: [
        {
          type: 'B1',
          totalOutputAmount: '',
          totalInputAmount: ''
        },
        {
          type: 'B2',
          totalOutputAmount: '',
          totalInputAmount: ''
        },
        {
          type: 'B3',
          totalOutputAmount: '',
          totalInputAmount: ''
        },
        {
          type: 'B4',
          totalOutputAmount: '',
          totalInputAmount: ''
        },
        {
          type: 'B5',
          totalOutputAmount: '',
          totalInputAmount: ''
        },
        {
          type: 'B6',
          totalOutputAmount: '',
          totalInputAmount: ''
        },
        {
          type: 'B7',
          totalOutputAmount: '',
          totalInputAmount: ''
        }
      ],
      filter: null,
      show: true
      // items: [
      //   {
      //     type: 'B1',
      //     produceAmount: '100',
      //     demandAmount: '100'
      //   }
      // ]
    }
  },
  async mounted () {
    const amount = await ethContract.methods
      .getTotalOutPutAmount()
      .call()
      .then(function (receipt) {
        return receipt
      })
    for (let i = 0; i < amount; i++) {
      const totalInputAmount = await ethContract.methods
        .outputInfos(i)
        .call()
        .then(function (receipt) {
          return receipt
        })

      this.list.push(totalInputAmount)
    }
    this.list.push()
    // for (let i = 0; i < amount; i++) {
    //   const OutputInfo = await ethContract.methods
    //     .allOutputInfos(i)
    //     .call()
    //     .then(function (receipt) {
    //       return receipt
    //     })
    //   this.list.push(OutputInfo)
    // }
    this.show = false
  },
  methods: {},
  components: { Navbar },
  computed: {
    rows () {
      return this.list.length
    }
  },
  watch: {}
}
</script>

<style >
.thClass {
  background-color: #1d325f;
  color: white;
}
.table.b-table > thead > tr > th,
.table.b-table > tfoot > tr > td {
  background-image: none !important;
}
</style>
<style scoped>
.text-center {
  width: 100%;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
.text {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
