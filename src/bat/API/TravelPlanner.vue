<template>
  <div class="travel-planner container-fluid mt-5">
    <h1 class="text-center mb-4">여행 일정 계획하기</h1>
    <form @submit.prevent="submitPlan" class="row g-3 align-items-end">
      <div class="col-md-2">
        <label for="days" class="form-label">여행 일수:</label>
        <input id="days" type="number" v-model="days" required class="form-control">
      </div>
      <div class="col-md-3">
        <label for="companions" class="form-label">동반자:</label>
        <input id="companions" type="text" v-model="companions" required class="form-control">
      </div>
      <div class="col-md-3">
        <label for="style" class="form-label">여행 스타일:</label>
        <input id="style" type="text" v-model="style" required class="form-control">
      </div>
      <div class="col-md-3">
        <label for="location" class="form-label">여행지역:</label>
        <input id="location" type="text" v-model="location" required class="form-control">
      </div>
      <div class="col-md-1">
        <button type="submit" class="btn btn-primary">제안 받기</button>
      </div>
    </form>
    <div class="d-flex">
      <div class="itinerary-container flex-grow-1">
        <div class="d-flex justify-content-around mb-3">
          <div v-for="(day, index) in itineraries" :key="index" class="day-container">
            <h2>{{ index + 1 }}일차</h2>
            <div class="attractions-list">
              <div v-for="attraction in day" :key="attraction.contentid" class="attraction-card mb-2">
                <h5 class="card-title">{{ attraction.title }}</h5>
                <img :src="attraction.firstimage || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'" alt="Image of {{ attraction.title }}" class="img-fluid">
                <p class="card-text">{{ attraction.addr1 }}</p>
                <!-- 버튼 추가 -->
                <button type="button" class="btn btn-outline-primary">상세보기</button>
                <button type="button" class="btn btn-outline-danger">좋아요</button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-container flex-grow-1" style="height: 500px;">
        <!-- Map placeholder or integration -->
        <div style="background-color: #eee; width: 100%; height: 100%;">
          Map Goes Here
        </div>
        <button class="btn btn-primary">일정 저장하기</button>
        <button class="btn btn-secondary" @click="goToSelfPlan">Cielo직접 만들기</button>
      
      </div>

    </div>
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
      location: '',
      itineraries: []  // 여행 일정 데이터를 저장할 배열
    };
  },
  methods: {
    submitPlan() {
      const apiUrl = 'http://localhost:3000/api/send-plan';
      const params = {
        days: this.days,
        companions: this.companions,
        style: this.style,
        location: this.location
      };
      axios.post(apiUrl, params)
        .then(response => {
          this.itineraries = response.data.data;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },


    goToSelfPlan() {
  // 콘솔 로그로 파라미터 데이터 확인
  console.log("Attempting to route to SelfPlan");
  console.log("Routing to SelfPlan with params:", {
    days: this.days,
    companions: this.companions,
    style: this.style,
    location: this.location
  });

  // $router.push() 호출 시 사용할 객체
  this.$router.push({
  name: 'SelfPlan',
  query: {
    days: this.days,
    companions: this.companions,
    style: this.style,
    location: this.location
  }
});
}






  }

};
</script>

<style scoped>
.travel-planner {
  max-width: 1200px;
  margin: auto;
}

.itinerary-container {
  overflow-x: auto;
  padding: 10px;
}

.day-container {
  width: 300px;
  margin-right: 20px;
  background-color: #f8f9fa; /* 통일된 배경색 */
  border: 1px solid #dee2e6; /* 경계선 추가 */
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 그림자 추가 */
}

.attractions-list {
  display: flex;
  flex-direction: column;
}

.attraction-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.img-fluid {
  height: 150px;
  width: 100%; /* 이미지 너비 조정 */
  background-color: #fff;
  object-fit: cover;
}

.map-container {
  width: 50%;
}
</style>