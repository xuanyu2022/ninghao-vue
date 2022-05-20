<template>
    <div>⽤户登录 {{ username }}</div>
       <AppInput
          :modelValue="username"
          @update:modelValue="username = $event"
        />
</template>
<script>
  import AppInput from './app-input.vue';
  export default {
      data() {
        return {
           username: '',
        };
      },
      components: { AppInput },
  };
</script>