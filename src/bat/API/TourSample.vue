<template>
    <div class="container mt-5">
      <h1 class="mb-4">지역 정보 전송 및 조회</h1>
      <div class="input-group mb-3">
        <input type="text" v-model="region" class="form-control" placeholder="지역 입력" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" @click="sendRegion">전송</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div v-if="places.length > 0" class="mt-3">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>정보</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="place in places" :key="place.contentid">
                  <td>
                    <img :src="place.firstimage || 'https://via.placeholder.com/150'" alt="place title" style="width: 150px; height: 150px; object-fit: cover;">
                  </td>
                  <td>
                    <h5>{{ place.title }}</h5>
                    <p>{{ place.addr1 }}</p>
                    <p>Coordinates: {{ place.mapx }}, {{ place.mapy }}</p>
                  </td>
                  <td>
                    <input type="checkbox" v-model="selectedPlaces" :value="place">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <p class="alert alert-warning">지역 정보가 없습니다.</p>
          </div>
        </div>
        <div class="col-md-4">
          <h3>선택된 목록</h3>
          <ul>
            <li v-for="place in selectedPlaces" :key="place.contentid">
              {{ place.title }} - {{ place.addr1 }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        region: '',
        places: [],
        selectedPlaces: []
      };
    },
    methods: {
      sendRegion() {
        const apiUrl = 'http://localhost:3000/api/send-region';
        axios.post(apiUrl, { region: this.region })
          .then(response => {
            this.places = response.data.data;
          })
          .catch(error => {
            console.error('전송 중 에러 발생:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  input, button {
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
  }
  .table {
    margin-top: 20px;
  }
  </style>
  