<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
  <div @click="user.name = 'WANGHAO'">{{ user.name }}</div>
  <h3 @click="changeName">{{ nameEmoji }}</h3>
</template>

<script>
import { watch, onMounted, reactive, ref, computed } from 'vue';

export default {
  setup() {
    const name = ref('宁皓网');
    const user = reactive({
      name: '王皓',
    });
    const changeName = () => {
      name.value = 'NINGHAO';
    };
    console.log(name.value);
    console.log(user);
    onMounted(() => {
      console.log('mounted');
    });
    watch(name, (newName, oldName) => {
      console.log(newName, oldName);
    });
    watch(user, (newUser, oldUser) => {
      console.log(newUser, oldUser);
    });
    const nameEmoji = computed(() => `${name.value} 🏕`);
    return {
      name,
      user,
      changeName,
      nameEmoji,
    };
  },
};
</script>

<style>
@import './styles/app.css';
</style>
