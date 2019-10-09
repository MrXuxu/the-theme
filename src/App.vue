<template>
  <div id="app">
    <theme-picker @change="themeChange" />
    <el-button type="primary">测试</el-button>
    <el-button type="primary">测试</el-button>
    <el-button type="primary" plain>测试</el-button>
    <div :style="mainBg">背景</div>
    <div :style="mainFont">测试文字</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ThemePicker from '@/components/ThemePicker'
// import Theme from '@/mixin/theme.js'
export default {
  name: 'app',
  components: {
    HelloWorld, ThemePicker
  },
  // mixins: [Theme],
  computed: {
    // mainTheme() {
    //   return this.$store.state.settings.theme
    // }
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  },
  created() {
    console.log(this.test);
  }
}
</script>

<style>

</style>
