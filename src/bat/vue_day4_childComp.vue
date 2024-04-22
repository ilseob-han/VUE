<template>
  
  <div class ="child">
    <h1>{{ childRef }}</h1>
    <!-- 부모 컴포넌트에서 전달된 parData 값을 받습니다.  -->
    <h3>{{ ch2.name }} // {{ ch2.cnt }}</h3>
        <!-- ref 객체의 name과 cnt 값을 표시 -->
    <button @click="btn_ev">부모호출</button>
  </div>
  </template>
  
  <script>
  
  export default { 
    name: 'App',
    // props: ['childRef', 'childRef2'],
    props: {
      childRef:{
        type: String, 
        default:'zero',
        required: true
        // required: true로 설정되어 있어 반드시 제공
      },
      ch2: Object
    },
    data() {
      return {
        
    }},
    methods: {
      
      btn_ev(){
        this.$emit('getChild','값');
        // 정해진 규칙
      }


      },
    components: {
    }
  }
  
  </script>
  
  <style>
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