<template>
  <div>
    <div>
      <navbar />
    </div>
    <div>
      <span style="font-size: 20px">工程名稱：</span>
      <input id="input-lg" style="width: 30%" v-model="project.name" />
      <br />
      <span style="font-size: 20px">工程地點：</span>
      <input id="input-lg" style="width: 30%" v-model="project.address" />
      <br />
      <span style="font-size: 20px">土方數量：</span>
      <input id="input-lg" style="width: 30%" v-model="project.amount" />
      <br />
      <span style="font-size: 20px">土質種類：</span>
      <input id="input-lg" style="width: 30%" v-model="project.type" />
      <br />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'shelterDeclare',
  data () {
    return {
      project: []
    }
  },
  components: { Navbar }
}
</script>

<style>
</style>
