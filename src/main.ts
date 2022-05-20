import { createApp } from 'vue';
import App from './app/app.vue';
import appRouter from './app/app.router';
/**
 * 创建应⽤
 */
const app = createApp(App);
/**
 * 应⽤路由
 */
app.use(appRouter);
/**
 * 挂载应⽤
 */
app.mount('#app');
