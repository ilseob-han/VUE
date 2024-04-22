<template>
    <div class="travel-planner">
      <h1>여행 일정 계획하기</h1>
      <form @submit.prevent="submitPlan">
        <div>
          <label for="days">여행 일수:</label>
          <input id="days" type="number" v-model="days" required>
        </div>
        <div>
          <label for="companions">동반자:</label>
          <input id="companions" type="text" v-model="companions" required>
        </div>
        <div>
          <label for="style">여행 스타일:</label>
          <input id="style" type="text" v-model="style" required>
        </div>
        <div>
          <label for="location">여행지역:</label>
          <input id="location" type="text" v-model="location" required>
        </div>
        <button type="submit">일정 제안 받기</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        days: '',
        companions: '',
        style: '',
        location: ''
      };
    },
    methods: {

   
        submitPlan() {
        const apiUrl = 'http://localhost:3000/api/send-plan';
        const params = {
          days: this.days,
          companions: this.companions,
          style: this.style,
          location: this.location};
          axios.post(apiUrl, params)
          .then(response => {
            console.log('Response:', response.data);
            // 추가적인 데이터 처리 로직을 여기에 작성하세요
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
   


    }
  };
  </script>
  
  <style scoped>
  .travel-planner label {
    margin-right: 10px;
  }
  .travel-planner input[type="text"], .travel-planner input[type="number"] {
    margin-bottom: 10px;
  }
  </style>
  