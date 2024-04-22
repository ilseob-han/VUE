<template>

<h1 :style="{ color: myTextColor }">{{y}}</h1>


{{cnt}}<br>
{{region}}<br>
  <button @click='btn_ev'>좋아요</button>

  <!-- <button v-on:click='btn_ev'>버튼</button> -->

</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cnt : 0,
      x: 0,
      y: "멋진 강남 스타일",
      // textColor: 'color : red'
      myTextColor: 'red'
    }
  },
  methods: {
    btn_ev(){
      this.cnt++,
      // 여기서 this 빠지면 에러다.
      this.region = '안양';
      this.y = '시원한 유럽 스타일';
      
      if(this.myTextColor=='blue')
      {this.myTextColor = 'red';}
      else if(this.myTextColor=='red')
      {this.myTextColor = 'blue';}
      }
  },
  components: {
  }
}
</script>

<style>
.my-text-color{color:red;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>