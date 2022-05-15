<template>
  <h3>{{ name }}</h3>
 
<label for="subscription-annual"> 
  <input id="subscription-annual" type="radio" value="annual" v-model="subscription">
  1年
</label>
<label for="subscription-quarterly"> 
  <input id="subscription-quarterly" type="radio" value="quarterly" v-model="subscription">
 季度
</label>


<span> -> subscription:{{subscription}}</span>
</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
          subscription:'annual',
         };
      },
    };
</script>



<style>
@import './styles/app.css';
</style>