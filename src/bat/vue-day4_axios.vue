<template>

<div class ="popup_bl" v-if="popupClose"> 
  <!-- v-if는 tag에 들어가며, 팝업을 열고 닫고를 결정한다.  -->
  
  <div class ="popup_wh">
   
    <div class="data-id">{{ detail.title }}</div><br/>
    <span class="data-title">>{{ detail.body }}</span><br/>

    <button @click="popupoff">팝업창 닫기</button>
    <!-- 닫기엔 변수 값 하나 필요  -->

  </div>
</div>


  <h1>AXIOS</h1>
  <button @click = btn_axios>AXIOS 호출</button>

  <table class="brd_table">
    <!-- <table> -->
<tr>
  <td>li.id</td><td>li.title</td><td>li.userId</td>
</tr>

 <!-- 키 값 모르겠으면 li 레퍼런스 그냥 키값넣어줘도 된다.  -->
  <!-- 다만 키값이 잘 안들어가면, 데이터가 대량일때 지연이 될 수 있다.  -->
<tr v-for="li in list" :key="li" @click="setDetail(li.id)">
  <td>{{li.id}}</td>
  <td>{{li.title}}</td>
  <td>{{li.userId}}</td>
</tr>
  </table>

</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      list : [],
      detail: {},
      popupClose : false,
    }
  },
  methods:{
      btn_axios(){
          axios.get('https://jsonplaceholder.typicode.com/posts') // axios를 이용하여 HTTP GET 요청
          .then(res => {
            // console.log(res);
            this.list=res.data;
            // console.log(this.list);
          })
      },

      setDetail(index){
        alert(index);
        axios.get('https://jsonplaceholder.typicode.com/posts/'+index)
        .then(res => {
          // 변수는 무엇으로 해도 상관없지만, then안에는 반드시 res가 들어가야 한다. 
          // 이 코드 블록은 axios HTTP 요청이 성공적으로 완료되었을 때 실행됩니다.
          console.log(res);
          this.detail = res.data;
          console.log('=============');
          console.log(this.detail);
          alert(this.detail);

          this.popupClose =true;

        })},

      popupoff(){
        this.popupClose =false;
      }
      

  },
  created(){
    //사용예시
    this.list =['apple','strawberry']
  },
  mounted(){
    this.btn_axios();

    // mounted()는 Vue 컴포넌트 라이프사이클 훅 중 하나로, 컴포넌트의 인스턴스가 마운트된 직후에 실행됩니다. 이 시점에서는 컴포넌트의 템플릿과 데이터가 이미 DOM에 삽입된 상태이기 때문에, DOM 또는 데이터를 조작하는 코드를 여기에 배치할 수 있습니다.
  },
  components: {
  }
}
</script>
<style>
@import './axios.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}
</style>






