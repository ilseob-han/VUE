import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/student'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');

window.Kakao.init('eacefd40746a961fa15d060e65fe0ad7'); // JavaScript 키
// 카카오 API키로 발급 받은 JavaScript키를 등록해야 한다