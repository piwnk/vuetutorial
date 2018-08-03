new Vue({
  el: '#exercise',
  data: {
    highlit: false,
    shrinked: true,
    bordered: true,
    thirdInputClass: '',
    fourthInputClass: '',
    fourthInputBoolean: '',
    fifthInputDivColor: '',
  },
  computed: {
    firstDivClasses: function () {
      return {
        highlight: this.highlit,
      }
    },
    secondDivClasses: function () {
      return {
        shrink: this.shrinked,
        hightlight: this.highlit
      }
    },
    fourthInputClassBoolean: function () {
      return {
        border: this.fourthInputBoolean === 'true' ? true : false,
      }
    },
    fifthDivStyle: function () {
      return {
        background: this.fifthInputDivColor,
      }
    }
  },
  methods: {
    startEffect: function () {
      this.highlit = !this.highlit
    },
    startProgress: function () {

    }
  }
});
