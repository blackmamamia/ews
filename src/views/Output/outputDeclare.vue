<template>
  <div class="app">
    <div class="navbar">
      <navbar />
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/homepage">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">出土申報</li>
      </ol>
    </nav>
    <div
      class="back"
      style="
        background-color: #dcdcdc;
        width: 1000px;
        height: 500px;
        margin-left: 450px;
        position: auto;
      "
    >
      <div style="padding-top: 70px">
        <span style="font-size: 20px; color: black">工程編碼：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.numbering"
        />
        <br />
      </div>
      <div style="padding-top: 70px">
        <span style="font-size: 20px; color: black">工程名稱：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.siteName"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">工程地點：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.siteAddress"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">土方數量：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.stoneAmount"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">土質種類：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.stoneType"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">預定起日：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.startDate"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">預定迄日：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="output.endDate"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black" for="avatar"
          >上傳檔案：</span
        >
        <input
          type="file"
          id="input-lg"
          name="avatar"
          style="width: 50%; height: 30px"
        />
        <br />
      </div>
      <div style="margin-left: 500px; margin-top: 50px">
        <b-button class="btn" @click="contractDeclareSave">儲存</b-button>
        <b-button @click="back" style="margin-left: 30px">返回</b-button>
        <!-- <b-button variant="danger" @click="test">測試鈕</b-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import Navbar from '@/components/Navbar.vue'
import { ethContract, fromAddress } from '@/service/index.js'

export default {
  name: 'contractDeclare',
  data () {
    return {
      output: {
        numbering: 'EAA00001',
        siteName: '',
        siteAddress: '',
        stoneAmount: '',
        stoneType: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  components: { Navbar },
  methods: {
    async contractDeclareSave () {
      const yes = confirm('確定儲存嗎？')
      if (yes) {
        await ethContract.methods
          .sendOutputInfo(
            this.output.numbering,
            this.output.siteName,
            this.output.siteAddress,
            this.output.stoneAmount,
            this.output.stoneType,
            this.output.startDate,
            this.output.endDate,
            false
          )
          .send({
            from: (
              await window.ethereum.request({ method: 'eth_requestAccounts' })
            )[0]
          })
          .then(function (receipt) {
            console.log(receipt)
          })
        alert('儲存成功！')
        this.$router.push({ name: 'outputLookup' })
      } else {
        alert('取消傳送')
      }
    },
    back () {
      const yes = confirm('尚未儲存，確定返回嗎？')
      if (yes) {
        this.$router.push({ name: 'HomePage' })
      }
    },
    async test () {
      await ethContract.methods
        .sendOutputInfo('E801', '新北市', 100)
        .send({
          from: (
            await window.ethereum.request({ method: 'eth_requestAccounts' })
          )[0]
        })
        .then(function (receipt) {
          console.log(receipt)
        })
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: gray;
  font-size: 16px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 6px;
  padding-bottom: 6px;
  color: white;
  border: 0;
}
.btn:hover {
  color: black;
  background-color: rgb(228, 228, 228);
  transform: scale(1.1);
}
</style>
