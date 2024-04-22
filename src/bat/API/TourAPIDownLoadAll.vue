<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      items: [], // API에서 가져온 데이터를 저장할 배열
      currentPage: 1, // 현재 페이지 번호
      totalPages: null, // 전체 페이지 수
    }
  },

  created() {
    this.fetchData(); // 컴포넌트가 생성되자마자 fetchData 메서드를 호출
  },

  methods: {
    fetchData() {
      const apiUrl = 'http://apis.data.go.kr/B551011/KorService1/areaBasedList1';
      const params = {
        serviceKey: 'SCiS2QeHSZaBzcfs5i8o7BsdxWGp6WTXKdMeOwlZuTwcQzL2bm0BR57M5AxQwIei0Of96djoM3KobZh5Gq1uLA==',
        numOfRows: 100,
        pageNo: this.currentPage,
        MobileOS: 'WIN',
        MobileApp: '씨엘로',
        listYN: 'Y',
        // contentTypeId: 25,
        // 관광타입(12:관광지, 14:문화시설, 15:축제공연행사, 25:여행코스, 28:레포츠, 32:숙박, 38:쇼핑, 39:음식점) ID
        _type: 'json'
      };

      axios.get(apiUrl, { params })
        .then(response => {
          this.items = response.data.response.body.items.item;
          this.totalPages = Math.ceil(response.data.response.body.totalCount / 100);
          console.log('데이터 로드 성공:', this.items);

          // 여기서 직접 btn_query를 호출합니다.
          this.btn_query();  // 서버에 데이터를 보내고, 성공적으로 적재되면 다음 페이지를 로드합니다.
        })
        .catch(error => {
          console.error('API 호출 에러:', error);
        });
    },

    btn_query() {
      if (!this.items.length) {
        console.error('No items to send');
        return;
      }

      axios.post("http://localhost:3000/query", this.items)
        .then(res => {
          console.log('서버로부터의 응답:', res.data);
          if (this.currentPage < this.totalPages) {
            this.currentPage++;  // 다음 페이지로
            this.items = [];  // 현재 페이지 데이터 초기화
            this.fetchData();  // 다음 페이지 데이터 로드
          }
        })
        .catch(error => {
          console.error('서버 요청 중 오류 발생:', error);
        });
    }
  }
}
</script>
