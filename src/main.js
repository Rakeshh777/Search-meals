import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import store from './store'
import * as filters from './filters'

const app = createApp(App);

app.use(router).use(store).mount('#app');

app.config.globalProperties.$filters = filters


