export default {
  data() {
    return {
    }
  },
  computed: {
    main() {
      return this.$store.state.settings.theme
    },
    mainBg() {
      return {'background-color': this.main}
    },
    mainFont() {
      return {'color': this.main}
    }
  }
}