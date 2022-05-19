<template>
  <div>
    <div style="margin-top: 15px">
      <navbar />
    </div>
    <div>
      <span style="font-size: 20px">工程名稱：</span>
      <input id="input-lg" style="width: 30%" v-model="projectName" />
      <br />
      <span style="font-size: 20px">工程地點：</span>
      <input id="input-lg" style="width: 30%" v-model="projectAddress" />
      <br />
      <span style="font-size: 20px">土方數量：</span>
      <input id="input-lg" style="width: 30%" v-model="ewsAmount" />
      <br />
      <span style="font-size: 20px">土質種類：</span>
      <input id="input-lg" style="width: 30%" v-model="ewsType" />
      <br />
      <span style="font-size: 20px">處理方式：</span>
      <input id="input-lg" style="width: 30%" v-model="handleMode" />
      <br />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'contractDeclare',
  data () {
    return {
      projectName: '',
      projectAddress: '',
      ewsAmount: '',
      ewsType: '',
      handleMode: ''
    }
  },
  components: { Navbar }
}
</script>

<style>
</style>
