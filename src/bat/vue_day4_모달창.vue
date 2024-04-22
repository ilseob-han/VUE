<template>
  
  <div class= "par">
    <h1>{{ parData }}</h1>
    <h1>부모Component</h1>
  
  </div>

  <ChildComponent :childRef="parData" :ch2="ref" @getChild="parMethod"/> 
  <!-- :childRef="parData"와 :ch2="ref"는 부모 컴포넌트에서 자식 컴포넌트로 parData와 ref 데이터를 prop으로 전달 -->

  </template>
  
  <script>
  
  import ChildComponent from '@/bat/vue_day4_childComp.vue'


  export default { 
    name: 'App',
    data() {
      return {
      parData: 'fromParent',
      // parData: 문자열 'fromParent'가 저장되어 있으며, 이는 자식 컴포넌트에 childRef라는 이름의 prop으로 전달됩니다.
      chiData: 'Nice Day',
      ref:{name:'test', cnt:10}
      // ch2라는 이름의 prop으로 전달됩니다.

    }},
    
    methods: {
      parMethod(state){
        alert('from parent to child 이를 통해 자식에게서 온 값으로 부모의 값을 수정할 수 있다.');
        console.log(state);
      }
      },
    components: {
      ChildComponent
    }
  }
  
  </script>
  
  <style>

  .par{
    width:100%;
    height:500px;
    border: orange 2px solid
  }
  .child{
    width:100%;
    height:500px;
    border: green 2px solid
  }
  .btn2 {
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
  
  .headSpan {
  color: blue; margin: 500px; font-size:50px;
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