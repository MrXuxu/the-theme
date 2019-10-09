<template>
  <div id="app">
    <theme-picker @change="themeChange" />
    <el-button type="primary">测试</el-button>
    <el-button type="primary">测试</el-button>
    <el-button type="primary" plain>测试</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThemePicker from '@/components/ThemePicker'

export default {
  name: 'app',
  components: {
    HelloWorld, ThemePicker
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style>

</style>
