<template>
  <div>
    <div class="navbar">
      <navbar />
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/homepage">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">需土資料查詢</li>
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
        <template #cell(name)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(address)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(demandAmount)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>

        <template #cell(type)="data">
          <span style="font-weight: normal; color: black; font-size: 14px">{{
            data.value
          }}</span>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { ethContract } from '@/service/index.js'

export default {
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: '工地名稱',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'address',
          label: '工地地點',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'demandAmount',
          label: '需土數量',
          sortable: true,
          sortDirection: 'desc'
        },
        {
          key: 'type',
          label: '土質種類',
          sortable: true,
          sortDirection: 'desc'
        }
      ],
      list: [],
      currentPage: 1,
      perPage: 10,
      filter: null,
      show: true
    }
  },
  components: {
    Navbar
  },
  computed: {
    totalRows () {
      return this.list.length
    }
  },
  async mounted () {
    const amount = await ethContract.methods
      .getOutputInfo()
      .call()
      .then(function (receipt) {
        return receipt
      })
    for (let i = 0; i < amount; i++) {
      const OutputInfo = await ethContract.methods
        .allOutputInfos(i)
        .call()
        .then(function (receipt) {
          return receipt
        })
      this.list.push(OutputInfo)
    }
    this.show = false
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
