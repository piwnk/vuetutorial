new Vue({
  el: "#app",
  data: {
    attachRed: true,
    color: 'green',
    width: 200
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
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})