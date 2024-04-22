<template>
    
    <div v-for="(li, i) in menu" :key="li">
      <span>{{li}}</span>
      <span>{{price[ i ]}}</span>
    </div>
    
    <div v-for="(k, i) in menuPlus" :key="i">
      <!-- 중복값 없는 것을 Key값으로 잡는게 키포인트 DB의 인덱스와 유사-->
  <span>장소 : {{k.name}}</span>
  <span>/요금 : {{k.price}}</span>
</div>

  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        menu: ['우동', '짜장면', '메밀'],
        price: [2000, 3000, 4000],
        menuPlus: [
          {name: '강남', price: 1000},
          {name: '서초', price: 2000},
          {name: '동장', price: 3000}        
        ]
      }
    },
    components: {
    }
  }
  </script>
  <style>
  .hambugerName {
    font-size: 30px;
    margin: 10px;
    font-weight: bold;
    color: blue;
  }
  .hambugerPrice {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    color:green
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
  }
  </style>