<template>
  <UserLogin />
  <h3>{{ name }}</h3>
  <input type="text" v-model="title" @keyup.enter="createPost" />
  <div>{{ errorMessage }}</div>

  <div v-for="post in posts" :key="post.id">
    <input
      type="text"
      :value="post.title"
      @keyup.enter="updatePost($event, post.id)"
    />
    <button @click="deletePost(post.id)">删除</button>
    {{ post.title }} -
    <small>{{ post.user.name }}</small>
  </div>
</template>

<script>
import { apiHttpClient } from '@/app/app.service';
import UserLogin from '@/user/components/user-login.vue';
export default {
  data() {
    return {
      name: '宁皓⽹',
      posts: [],
      errorMessage: '',
     
      token: '',
      title: '',
    };
  },
  
  components:{
    UserLogin,
  },

  async created() {
    this.getPosts();
    // try {
    //   const response = await apiHttpClient.post('/login', this.user);
    //   // console.log(axios.defaults);
    //   this.token = response.data.token;
    //   console.log(response.data);
    //   //console.log(this.token);
    // } catch (error) {
    //   this.errorMessage = error.message;
    // }
  },

  methods: {
    //删除内容
    async deletePost(postId) {
      try {
        await apiHttpClient.delete(`/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
      
    },

    //  更新内容
    async updatePost(event, postId) {
      console.log(event.target.value);
      console.log(postId);
      try {
        await apiHttpClient.patch(
          `/posts/${postId}`,
          {
            title: event.target.value,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );
        this.getPosts();
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    //获得内容
    async getPosts() {
      try {
        const response = await apiHttpClient.get('/posts');

        this.posts = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    //创建内容
    async createPost() {
      try {
        const response = await apiHttpClient.post(
          '/posts',
          {
            title: this.title,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          },
        );
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
