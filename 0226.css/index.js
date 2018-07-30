new Vue({
  el: "#app",
  data: {
    attachRed: true,
    color: 'green'
  },
  methods: {
    toggleRed: function () {
      this.attachRed = !this.attachRed;
    }
  },
  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
})