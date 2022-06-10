<template>
  <h3>{{ name }}</h3>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
  <div>{{ errorMessage }}</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '宁皓⽹',
      posts: [],
      errorMessage: '',
    };
  },
  async created() {
    try {
      const response = await axios({
        method: 'get',
        url: '/posts',
        baseURL: 'http://localhost:3000',
        headers: {
          'X-Custom': 'hello ~',
        },
      });
      this.posts = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }
  },
};
</script>

<style>
@import './styles/app.css';
</style>
