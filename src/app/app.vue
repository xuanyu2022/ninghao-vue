<template>
  <h3>{{ name }}</h3>
 
  <input type="text" v-model="content">
  <span>-> content: {{content}}</span>
</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
         content:'天地玄黄'
        };
      },
    };
</script>



<style>
@import './styles/app.css';
</style>