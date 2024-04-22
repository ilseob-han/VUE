<template>
    <h1>Node Test</h1>
    <button @click="btn_ev">체크하기</button><br>
    <button @click="btn_ev3">체크하기2</button><br>
    <button @click="btn_ev4">오브젝트리퀘스트</button><br>
    <button @click="btn_ev5">post리퀘스트</button><br>
    <button @click="btn_query">쿼리req1</button><br>
    <button @click="btn_query2">쿼리req2</button><br>
    <button @click="btn_queryInsert">쿼리insert</button><br>
    <button @click="btn_queryPromise">쿼리Promise</button><br>

  </template>
  
  <script>
  import axios from 'axios';
  // 임포트 필수 

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
      btn_ev(){
        alert('메롱');
        let url = "http://localhost:3000/test";
        // http => 예전에 많이 사용했는데, 지금은 https로 넘어갔다. https는 유료임. 
        // 위 코드에서는 axios.get(url)을 통해 지정된 URL로부터 데이터를 요청하고 있습니다. 
        // 요청이 성공적으로 완료되면, .then() 블록 내의 코드가 실행됩니다. 
        // 이 블록 내에서 res 객체를 사용하여 응답 데이터를 확인하고 있으며, 
        // console.log(res)를 통해 응답 객체 전체를 콘솔에 출력합니다. 
        
        axios.get(url)
        .then(res=>{
          // alert('client: axios.get(url)')
          console.log(res.data.name);
          console.log(res);
        })
      },

      btn_ev3(){
        alert('btn_ev3');
        let url = "http://localhost:3000/get1?name=한일섭&age=5";
        // 보낼때는 ? 를 붙이는게 규칙/ 
        
        axios.get(url)
        .then(res=>{
          // alert('client: axios.get(url)')
          console.log(res.data.name);
          console.log(res);
        })
      },

      btn_ev4(){
        alert('btn_ev4 실행');
        let obj ={};
        obj.name='한일섭';
        obj.age=5;
        
        //axios 문법 - 매개변수 하나일때 axios(url),
        // 매개변수 여러개일때  axios(url.option), option에는 param이라는 object가 담긴다. 
        // 객체 보낼때는 ? 를 삭제 규칙/ 
        
        axios.get("http://localhost:3000/get1",{
          params: obj
        })
        .then(res=>{
          console.log(res.data.name);
          console.log(res);
        })
      },

      btn_ev5(){
    
        let obj ={};
        obj.name='한일섭';
        obj.age=5;         
        
        axios.post("http://localhost:3000/post1", obj)
        .then(res=>{
          console.log(res.data.name);
          console.log(res);
        })
      },
    
    
    btn_query(){
           
    axios.get("http://localhost:3000/query")
    .then(res=>{
      console.log(res.data.name);
      console.log(res);
    })
  },

  
  btn_query2(){
          let obj = {};
          // obj.job = '부장';
          // obj.empNo = 1007;
          obj.sal = 500;

           
           axios.get("http://localhost:3000/query3",{params :obj})
           .then(res=>{
             console.log(res.data);
           })
         },


    btn_queryInsert(){

      let obj = {};
      obj.deptNo =60;
      obj.dname ='wallfacer';
      obj.loc = 'un';

      axios.post('http://localhost:3000/insert',obj)
          .then(res=>{
             console.log(res.data);
           })
         },

    },

    btn_queryPromise(){

      axios.get("http://localhost:3000/promise")
    .then(res=>{
      console.log(res.data.name);
      console.log(res);
    })
  },


      components: {
    }
  }
  </script>
  
  <style>
    
  </style>