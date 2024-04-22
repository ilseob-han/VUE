<template>
  <h1>Hello</h1>
  <input type ="text" v-model="inputText">
  <button @click="btn_ev">버튼</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inputText: 'abc'
      //여기서 한번 더 성언을 해줘야 한다. 
    }
  },
  methods: {
btn_ev(){
alert(this.inputText);
}

  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>