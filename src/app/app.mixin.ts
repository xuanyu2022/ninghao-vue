import { ComponentOptions, ComponentPublicInstance } from 'vue';
import { APP_NAME } from './app.config';
/**
 * 设置页⾯标题
 */
const setTitle = (vm: ComponentPublicInstance) => {
  // 获取组件⾥的 title 选项
  const { title } = vm.$options;
  if (title) {
    let titleContent;
    if (typeof title === 'function') {
      // 执⾏ title
      titleContent = title.call(vm);
    } else {
      titleContent = title;
    }
    document.title = `${titleContent} - ${APP_NAME}`;
  }
  if (vm.$route.path === '/') {
    document.title = APP_NAME;
  }
};

export const titleMixin: ComponentOptions = {
  created() {
    setTitle(this);
  },
  updated() {
    setTitle(this);
  },
};
