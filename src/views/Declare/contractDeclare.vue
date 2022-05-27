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
        margin-top: 150px;
      "
    >
      <div style="padding-top: 70px">
        <span style="font-size: 20px; color: black">工程名稱：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="project.name"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">工程地點：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="project.address"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">土方數量：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="project.produceAmount"
        />
        <br />
      </div>
      <div style="padding-top: 30px">
        <span style="font-size: 20px; color: black">土質種類：</span>
        <input
          id="input-lg"
          style="width: 50%; height: 30px"
          v-model="project.type"
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
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'contractDeclare',
  data () {
    return {
      project: {
        name: '',
        address: '',
        produceAmount: '',
        type: ''
      }
    }
  },
  components: { Navbar },
  methods: {
    contractDeclareSave () {
      const yes = confirm('確定儲存嗎？')
      if (yes) {
        alert('儲存成功！')
        this.$router.push({ name: 'HomePage' })
      } else {
        alert('取消傳送')
      }
    },
    back () {
      const yes = confirm('尚未儲存，確定返回嗎？')
      if (yes) {
        this.$router.push({ name: 'HomePage' })
      }
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
