<template>
  <h3>{{ name }}</h3>
 
  <textarea v-model = "content" placeholder="书写内容"></textarea>
  <span>   -> content={{content}} </span>
</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
         content:''
        };
      },
    };
</script>



<style>
@import './styles/app.css';
</style>