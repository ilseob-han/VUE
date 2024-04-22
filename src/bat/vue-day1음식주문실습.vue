<template>
  <h1>행운반점</h1>

  <button @click='blackNoodle()'>짜장면 추가</button><br>
  {{"주문 수량: " }}{{food.짜장면}}<br><br>

    <button @click='redNoolde()'>짬뽕 추가</button><br>
  {{"주문 수량: " }}{{food.짬뽕}}<br><br>

  <button @click='fiedRice()'>볶음밥 추가</button><br>
  {{"주문 수량: " }}{{food.볶음밥}}<br><br>

   {{"합계 수량: " }}{{totalFood}}<br><br>
   {{"좋아요 건수: " }}{{totalLike}}<br>

    <button @click='likeIt()'>좋아요</button><br>

    <h2>오늘의 행운</h2>

    <d>행운의 색 </d>
    <div :class ="luckyColor" :style = "colorStyle">■</div><br><br>

    <d>행운의 숫자: </d>
    <d>{{luckyNumber}}</d><br><br>

     <button @click='randomNo()'>오늘의 행운은?</button><br>



</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      food : {'짜장면':0, '짬뽕':0, '볶음밥' :0},
      totalFood : 0,
      totalLike : 0,
      lucky: 'red',
      luckyNumber: 0,
      colorStyle:'',
      luckyColor : ['gold','green','purple','blue','red'],

    
    }
  },

  methods: {
    blackNoodle(){
      this.food.짜장면++;
      this.totalFood ++;
      this.likeIt()
      },

          redNoolde(){
      this.food.짬뽕++;
      this.totalFood ++;
      this.likeIt()
      },


          fiedRice(){

      this.food.볶음밥++;
      this.totalFood ++;
      this.likeIt()
      },


      likeIt(){
      this.totalLike++;
        },

      randomNo(){
      let index = Math.floor(Math.random() * this.luckyColor.length);
      this.colorStyle = 'background=color: ' +this.luckyColor[index];
      this.luckyNumber = Math.floor(Math.random()*99)+1;     
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

.luckyColor{
  display:inline-block;
  width:20px;
  height:20px;
  /* 일단 영역 넓혀주는 것  */
}
</style>