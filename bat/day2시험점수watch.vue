<template>

  <h1>이름만들기</h1>
  <span>이름</span>
  <input type="text" v-model="myName"><br>

  <span>국어점수</span>
  <input type="int" v-model="myKor"><br>
   <span>영어점수</span>
  <input type="int" v-model="myEng"><br>
   <span>수학점수</span>
  <input type="int" v-model="myMath"><br>


  <div v-for="li in 9" :key="li">
    {{ li }}
  </div>

<span>총합계: {{total}}</span>


</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      myName:'',
      myKor:0,
      myEng:0,
      myMath:0
      // 여기 선언이 되어야 감시자가 작동한다.
    }
  },

  watch:{
    myName(){
      this.myKor=0;
      this.myEng=0;
      this.myMath=0;
    }
  },

  computed:{
    total(){

      return Number(this.myKor)+Number(this.myMath)+Number(this.myEng);
    },

  methods: {

  },

  components: {
  }
}
}
</script>

<style>


</style>