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
        :per-page="perPage"
        :current-page="currentPage"
        fixed
        :items="items"
      >
        <template #cell(type)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(produceAmount)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(demandAmount)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template v-slot:cell(actions)="{ item }">
          <span><b-btn @click="editItem(item)">撮合</b-btn></span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'HomePage',
  data () {
    return {
      perPage: 16,
      currentPage: 1,
      sortBy: null,
      sortDesc: false,
      fields: [
        {
          key: 'type',
          label: '土質種類',
          tdClass: 'align-middle'
        },
        {
          key: 'produceAmount',
          label: '出土數量',
          tdClass: 'align-middle'
        },
        {
          key: 'demandAmount',
          label: '需土數量',
          tdClass: 'align-middle'
        },
        {
          key: 'actions',
          label: '操作',
          tdClass: 'align-middle'
        }
      ],
      items: [
        {
          type: 'B1',
          produceAmount: '100',
          demandAmount: '100'
        }
      ]
    }
  },
  async mounted () {},
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
  margin-top: 90px;
}
.text {
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
