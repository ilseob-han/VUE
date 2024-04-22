<template>
 
  <!-- <h1 style="" :style = "imgSrc">Hello World1</h1> -->
  <h1 style="" :style = "imgSrc">Hello World1</h1>
 <!-- 스타일 내용을 변수 설정후 적용 -->
  <span :class="{active: classC}">변수에 따른 글자 변경</span>
  <!-- active가 클래스명이고 classC이 변수 명이다. -->
  <h2>{{data}}</h2>
  <h3>{{menu[0]}}</h3>
  <h3>{{menu[1]}}</h3>
  <h3>{{menu[2]}}</h3>
  <d>{{fu}}</d><br>
  <d>{{fu.key1}}</d><br>  
  <d>{{data2}}</d>
   
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
      data: 'HelloWorld',
      data2: "it's a good day",  
      menu: ['ABOUT US','NEWS','ARTICLES'],
      imgSrc: 'color: red',
      classC: true,
      // classC가 true, false에 따라 Class 양식이 변경된다. 
      fu : {key1:'사과', key2:'딸기', key3 :'바나나'}

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
.active{
  font-size: 50;
  color: red;
}
</style>
