<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h1>회원가입</h1>

<span :style="headSpan">HTML blue margin100</span><br/>
<!-- 이건 HTML 문법이다. color:blue; margin: 100px -->
<!-- 이렇게 하는건 vue의 문법이다. span :style="headSpan" -->
<span class="headSpan">Class red margin10</span> <br/>
<!-- 이건 클래스로 빼서 처리한 방법(시험문제) -->
<span :class="x">vue green</span> <br/>
<!-- 이건 클래스를 뷰 문법으로 불러서 처리한 방법) -->
<span :class="y">StyleHeadClass</span> 
<!-- 이건 클래스를 뷰 문법으로 클래스 불러서 처리한 방법) -->
<button @click="colorChange">색변환</button><br/>

<input type="text" v-model="mem_id" id="mem_id_js"  
:disabled="mem_check"> 
<!-- text input 및 disable(입력 불가처리) -->
<button @click="btn_id">중복체크</button> <br/>
<span>회원 닉네임</span>
<input type="text" v-model="mem_nick"><br/>


<span>좋아하는 숫자</span>
<select v-model="goodNum" name="power" id="power">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select><br/>
<!-- select v-model적용 -->

<span>국내/해외 radio</span>
<input type="radio" name="tr" v-model="mem_tr" value="해외">해외
<input type="radio" name="tr" v-model="mem_tr" value="국내">국내

<br/>

<span>취미 checkbox</span>
<input type="checkbox" name="hb" v-model="mem_ho" value="자전거">자전거
<input type="checkbox" name="hb" v-model="mem_ho" value="기타">기타
<input type="checkbox" name="hb" v-model="mem_ho" value="독서">독서
<input type="checkbox" name="hb" v-model="mem_ho" value="산책">산책

<br/>

<button @click="btn_join">회원가입</button>
{{i}}
{{j}}
{{k}}
{{l}}
{{m}}
{{mem_ho}}

<br/>
<span>실시간 반영</span>
{{mem_id}}
{{mem_nick}}
{{goodNum}}
{{tr}}




<!-- {{mem_tr}} -->
<!-- 마우스 클릭하면 글자가 나타나도록 하는 방법  -->

</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return{
      memCheck: '',
      mem_check:true,
      goodNum: '',
      mem_id:'',
      mem_nick:'',
      headSpan: 'color:blue; margin: 10px',
      mem_ho : [],
      // 마진이란 다음 텍스트와의 거리
      x: 'headSpan',
      y: {headSpan: true},
      // false이면 y의 디자인 값이 안들어 간다. 
      i: '',
      j: '',
      k: '',
      l: '',
   
    }
  },
  methods: {
   btn_id() {
    this.memCheck = this.mem_id;
    this.mem_check = false;
    alert(this.mem_check);
   },
   btn_join() {
    // alert(document.getElementById('mem_id_js').value);
    this.i=this.mem_id;
    this.j=this.mem_nick;
    this.k=this.goodNum;
    this.l=this.mem_tr;
    this.m=this.mem_ho
    
   },

   colorChange()
   {this.headSpan = false}
   


  }
}
</script>
<style>
 
#app {
  font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  font-size: 15px;
  font-weight: bold;
}

.fruit-input {
  margin: 20px;
}

.fruit-input input {
  margin-left: 10px;
  padding: 8px;
  width: 100px;
}

h2 {
  color: #34495e;
}


.headSpan {
color:green; 
margin: 10px
/* "." 점이라는 것이 클래스를 의미한다. */
}
</style>