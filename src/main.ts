import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';

/**
* 创建应⽤
*/
const app = createApp(App);

/**
* 应⽤ Store
*/
app.use(appStore);

/**
* 挂载应⽤
*/
app.mount('#app');