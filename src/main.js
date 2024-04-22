import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/student'

const app = createApp(App);

app.use(router);
app.use(store);