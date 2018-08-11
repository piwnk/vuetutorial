new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    randomDamage: function (min, max) {
      return Math.round(Math.random() * (max - min)) + min
    },
    attack: function () {
      this.monsterHealth -= this.randomDamage(3, 10)
      this.playerHealth -= this.randomDamage(5, 12)
    },
    specialAttack: function () {

    },
    heal: function () {

    },
    giveUp: function () {

    },
    checkWin: function () {
      if (this.monsterHealth < 0) {
        if (confirm('You win! Play again?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false;
        }
      } else if (this.playerHealth < 0) {
        if (confirm('You Lost! Play again?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false;
        }
      }
    }
  }
})