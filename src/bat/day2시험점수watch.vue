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

  <button @click="btn_stu">성적추가</button>
  <!-- <button @click="btn_stuList">받아오기 테스트</button> -->

  <button @click="btn_mody">성적수정</button>

  <span>총합계: {{total}}</span>


  <div v-for="(k, i) in stuList" :key="i">
  <!-- 감시자 computed에서 리턴한 stuList를 바탕으로 출력한다.-->
  <span>이름 : {{k.name}}</span>
  <span>국어 : {{k.kor}}</span>
  <span>영어 : {{k.eng}}</span>
  <span>수학 : {{k.math}}</span>

</div>

<!-- 이름을 기준으로 성적 수정 -->


</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      myName:'',
      myKor:0,
      myEng:0,
      myMath:0,
      obj: {},
      testList: {},
      // 여기 선언이 되어야 감시자가 작동한다.
    }
  },

  methods: {
    
    btn_stu(){
      this.obj = new Object;
      this.obj.name = this.myName;
      this.obj.kor = this.myKor;
      this.obj.eng = this.myEng;
      this.obj.math = this.myMath;

      console.log(this.obj);
      this.$store.commit('addStu',this.obj);

    },
    // btn_stuList(){
    //   this.testList = this.$store.getters.getStudentList;
    //   console.log(this.testList);
    // },

    btn_mody(){
      console.log("From bat, btn_mody 실행");
      this.modyList = this.$store.getters.getStudentList;

      this.obj = new Object;
      this.obj.name = this.myName;
      this.obj.kor = this.myKor;
      this.obj.eng = this.myEng;
      this.obj.math = this.myMath;

      let delIndex = 0;
      // for(let i = this.modyList.length; i >0; i--){

      
      for(let i = this.modyList.length-1; i >=0; i--){
     
        console.log("From bat, for문실행");
        if(this.modyList[i].name==this.obj.name){
          this.$store.commit('delStu',delIndex);
          console.log("From bat, for문 일치");
          this.$store.commit('addStu',this.obj);
    
        }
        
      }

      console.log(this.modyList);
      // this.$store.commit('modyStu',this.obj);

    },


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

    stuList(){
    return this.$store.getters.getStudentList;
    // 감시자 할때는 리턴을 꼭 넣어야 한다. 
    }


},
  components: {
  }
}
</script>
<style>
</style>