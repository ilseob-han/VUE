<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>타이머</h1>
  <input type="number" v-model="inputSecond"><span class="span_secondInput">초 뒤 알람</span>
  <input type="button" class="btn_alarm" @click="alaramSetting" value="알람 시작"/>




  <p class="eventAlarm" :style="displayOnOff">{{inputSecond}}초가 지났습니다<br/>
  알람 시작!</p>
</template>

<script>

export default { 
  name: 'App',
  data() {
    return {
      inputSecond: '',
      displayOnOff: 'display: none'
    }
  },
  methods: {
    alaramSetting() {
      if(this.inputSecond == '') {
        this.inputSecond = 1;
      }
      else if(this.inputSecond > 5 ) {
        this.inputSecond = 5;
      }
      setTimeout(function() {
        this.displayOnOff = 'display: block';
      }.bind(this), (this.inputSecond*1000))
    }
  },
  components: {
  }
}
</script>

<style>
.btn_alarm {
  margin-left: 10px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: plum;
  font-size: 15px;
  font-weight: bold;
  color:white;
}

.span_secondInput {
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
}

.eventAlarm {
  font-size: 40px;
  font-weight: bold;
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>