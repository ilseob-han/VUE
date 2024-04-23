<template>
    <div>
      <h1>여행 계획 세부 정보</h1>
      <p>여행 일수: {{ days }}</p>
      <p>동반자: {{ companions }}</p>
      <p>여행 스타일: {{ style }}</p>
      <p>여행 지역: {{ location }}</p>
      <button @click="sendPlan">계획 보내기</button>
      <div v-if="itineraries.length > 0">
        <h2>여행 일정</h2>
        <div class="grid-container">
          <div v-for="(group, index) in groupedItineraries" :key="index" class="grid-item">
            <div class="grid-title">{{ group.title }}</div>
            <div class="grid-content">
              <ul>
                <li v-for="(item, subIndex) in group.items" :key="subIndex">
                  <img :src="item.firstimage || 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E'" alt="Image of {{ item.title }}" class="img-fluid" style="width: 150px;">
                  <p>{{ item.title }}</p>
                  <p>{{ item.addr1 }}</p>
                  <button @click="viewDetails(item)">상세 정보</button>
                  <button @click="addSchedule(item)">일정 추가</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid-item" style="width: 30%;"></div> <!-- 30%의 빈 영역 -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    computed: {
      days() {
        return this.$route.query.days;
      },
      companions() {
        return this.$route.query.companions;
      },
      style() {
        return this.$route.query.style;
      },
      location() {
        return this.$route.query.location;
      },
      groupedItineraries() {
        const grouped = [
          { title: '관광지', items: [] },
          { title: '문화예술', items: [] },
          { title: '레포츠', items: [] },
          { title: '식당', items: [] }
        ];
        this.itineraries.forEach(item => {
          if (item.contenttypeid === '12') {
            grouped[0].items.push(item);
          } else if (item.contenttypeid === '14') {
            grouped[1].items.push(item);
          } else if (item.contenttypeid === '28') {
            grouped[2].items.push(item);
          } else if (item.contenttypeid === '39') {
            grouped[3].items.push(item);
          }
        });
        return grouped;
      }
    },
    data() {
      return {
        itineraries: [] // 여행 일정 데이터를 저장할 배열
      };
    },
    methods: {
      sendPlan() {
        const apiUrl = 'http://localhost:3000/api/self-plan';
        const data = {
          days: this.days,
          companions: this.companions,
          style: this.style,
          location: this.location
        };
  
        axios.post(apiUrl, data)
          .then(response => {
            this.itineraries = response.data.data;
            console.log('서버 응답:', response.data);
            console.log('서버 응답:', this.itineraries); // 수정된 부분
            alert('데이터 전송 성공');
          })
          .catch(error => {
            console.error('전송 실패:', error);
            alert('데이터 전송에 실패했습니다');
          });
      },
      viewDetails() {
        // 상세 정보를 보여주는 로직 추가
      },
      addSchedule() {
        // 일정 추가 로직 추가
      }
    }
  };
  </script>
  
  <style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, auto) 30%;
    padding: 2px;
  }
  
  .grid-item {
    padding: 20px;
    text-align: center;
    border: 1px solid black; /* 사각형 테두리 추가 */
  }
  
  .grid-title {
    font-weight: bold;
    margin-bottom: 10px; /* 마진 줄임 */
  }
  
  .grid-content {
    margin-bottom: 20px;
  }
  
  .grid-item:last-child {
    display: none; /* 마지막 그리드 아이템은 숨김 */
  }
  
  .button-group {
    margin-top: 10px;
  }
  
  .button-group button {
    margin-right: 10px;
  }
  </style>
  