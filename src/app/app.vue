<template>
  <UserLogin 
 v-if="!isLoggedIn"
  @login-success="onLoginSuccess"
  @login-error="onLoginError"
  />
  

  <div v-if="currentUser">
    <div>{{currentUser.name}}</div>
    <button @click="logout">退出</button>
  </div>


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
      checked: true,
      content: '天地玄黄 ',
      tags:[],
      currentUser:null,
    };
  },
  
  components:{
    UserLogin,
  },
  computed: {
    isLoggedIn(){
      return this.token ? true:false;
    }
  },
  async created() {
    this.getPosts();
    const tid = localStorage.getItem('tid');
    const uid = localStorage.getItem('uid');

    if(tid){
      this.token=tid;
    }
    if(uid){
      this.getCurrentUser(uid);
    }

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

    logout(){
      this.token='';
      this.currentUser=null;
      localStorage.removeItem('tid');
      localStorage.removeItem('uid');
    },
    async getCurrentUser (userId){
      try {
        const response = await apiHttpClient.get(`/users/${userId}`);
        this.currentUser = response.data;
      } catch (error) {
        this.errorMessage = error.message;
      }
    },

      onLoginSuccess(data) {
            this.token = data.token;
            this.getCurrentUser(data.id);
            localStorage.setItem('tid',data.token);
            localStorage.setItem('uid',data.id);
            },
      onLoginError(error) {
            this.errorMessage = error.data.message;
            },
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
