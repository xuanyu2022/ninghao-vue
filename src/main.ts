import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';
import appRouter from './app/app.router';
import { titleMixin } from './app/app.mixin';
/**
 * 创建应⽤
 */
const app = createApp(App);

/**
 * 应⽤ Store
 */
app.use(appStore);

/**
 * 应⽤路由器
 */
app.use(appRouter);

/**
 * 挂载应⽤
 */
app.mount('#app');

/**
 * 标题混合
 */
app.mixin(titleMixin);
