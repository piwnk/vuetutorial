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
    progress: 0,
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
    },
    progressStyle: function () {
      return {
        width: this.progress + '%',
        height: 100 + '%',
        background: 'blue',
      }
    },
  },
  methods: {
    startEffect: function () {
      this.highlit = !this.highlit
    },
    progressInterval: function () {
      setInterval(() => {
        // console.log('asdf');
        // console.log(this.progress)
        this.progress += 20;
        if (this.progress > 100) {
          clearInterval(this.progressInterval); //doesn't work
          this.progress = 0;
        }
      }, 1000)
    },
    startProgress: function () {
      this.progressInterval();
      console.log(this.progress)
    }
  }
});
