<template>
  <h3>
    <router-link to="/posts">{{ name }}</router-link></h3>
  <router-view></router-view>

</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
         
        };
      },
      created() {
           console.log(this.$store.state);
      },
    };
   
</script>



<style>
@import './styles/app.css';
</style>