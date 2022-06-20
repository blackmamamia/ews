<template>
  <div>
    <div class="navbar">
      <navbar />
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/homepage">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">撮合作業</li>
      </ol>
    </nav>
    <b-row>
      <b-col cols="6">
        <span style="margin-right: 800px">出土：</span>
        <div>
          <b-table
            class="text-center"
            thead-class="thClass"
            small
            responsive="sm"
            ref="selectableTable"
            striped
            bordered
            :fields="fields1"
            :filter="filter"
            :items="list1"
            :per-page="perPage"
            :current-page="currentPage"
            fixed
            :select-mode="selectMode"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(select)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only"></span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
            <template #cell(siteName)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>

            <template #cell(siteAddress)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>

            <template #cell(stoneAmount)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>

            <template #cell(stoneType)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>
          </b-table>
        </div>
      </b-col>
      <b-col cols="6">
        <span style="margin-right: 800px">需土：</span>
        <div>
          <b-table
            class="text-center"
            thead-class="thClass"
            small
            responsive="sm"
            ref="selectableTable"
            striped
            bordered
            :fields="fields2"
            :filter="filter"
            :items="list2"
            :per-page="perPage"
            :current-page="currentPage"
            fixed
            :select-mode="selectMode"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(select)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
                <span class="sr-only"></span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
                <span class="sr-only">Not selected</span>
              </template>
            </template>
            <template #cell(siteName)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>

            <template #cell(siteAddress)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>

            <template #cell(stoneAmount)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>

            <template #cell(stoneType)="data">
              <span
                style="font-weight: normal; color: black; font-size: 14px"
                >{{ data.value }}</span
              >
            </template>
          </b-table>
        </div>
      </b-col>
    </b-row>
    <div>
      <b-button @click="match()">撮合</b-button>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { ethContract } from '@/service/index.js'
export default {
  name: 'Matchup',
  data () {
    return {
      select: null,
      selected: [], // Must be an array reference!
      selectedRows: [],
      selectMode: 'multi',
      fields1: [
        {
          key: 'select',
          label: '勾選',
          tdClass: 'align-middle'
        },
        {
          key: 'siteName',
          label: '工地名稱',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'siteAddress',
          label: '工地地點',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'stoneAmount',
          label: '出土數量',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'stoneType',
          label: '土質種類',
          sortable: true,
          sortDirection: 'desc'
        }
      ],
      fields2: [
        {
          key: 'select',
          label: '勾選',
          tdClass: 'align-middle'
        },
        {
          key: 'siteName',
          label: '工地名稱',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'siteAddress',
          label: '工地地點',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'stoneAmount',
          label: '需土數量',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'stoneType',
          label: '土質種類',
          sortable: true,
          sortDirection: 'desc'
        }
      ],
      list1: [],
      list2: [],
      currentPage: 1,
      perPage: 10,
      filter: null,
      show: true
    }
  },
  async mounted () {
    const bbb = await ethContract.methods
      .getOutputInfo()
      .call()
      .then(function (receipt) {
        return receipt
      })
    for (let i = 0; i < bbb; i++) {
      const outputInfo = await ethContract.methods
        .outputInfos(i)
        .call()
        .then(function (receipt) {
          return receipt
        })

      this.list1.push(outputInfo)
    }
    this.show = false
    const aaa = await ethContract.methods
      .getInputInfo()
      .call()
      .then(function (receipt) {
        return receipt
      })
    for (let i = 0; i < aaa; i++) {
      const inputInfo = await ethContract.methods
        .inputInfos(i)
        .call()
        .then(function (receipt) {
          return receipt
        })
      this.list2.push(inputInfo)
    }
    this.show = false
  },
  components: {
    Navbar
  },
  computed: {},
  methods: {
    onRowSelected (items) {
      this.selectedRows = items
    }
  }
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
