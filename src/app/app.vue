<template>
  <h3>{{ name }}</h3>

  <div v-for="post in posts" :key="post.id">
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
  <input type="text" v-model="title" @keyup.enter="createPost" />
  <div>{{ errorMessage }}</div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';

export default {
  data() {
    return {
      name: '宁皓⽹',
      posts: [],
      errorMessage: '',
      user: {
        name: '王皓',
        password: '123123',
      },
      token: '',
      title: '',
    };
  },
  async created() {
    try {
      const response = await apiHttpClient.get('/posts');

      this.posts = response.data;
    } catch (error) {
      this.errorMessage = error.message;
    }

    try {
      const response = await apiHttpClient.post('/login', this.user);
      // console.log(axios.defaults);
      this.token = response.data.token;
      console.log(response.data);
      //console.log(this.token);
    } catch (error) {
      this.errorMessage = error.message;
    }
  },

  methods: {
    async createPost() {
      try {
        const response = await apiHttpClient.post('/posts', {
          title: this.title,
        });
        console.log(response.data);
        this.title = '';
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>

<style>
@import './styles/app.css';
</style>
