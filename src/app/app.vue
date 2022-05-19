<template>
  <h3>{{ name }}</h3>
 
  <AppButton  @tap="onTapAppButton" @init="onInitAppButton">提交 </AppButton>
  
</template>




<script>
import AppButton from '@/components/app-button.vue';
 
    export default {
      data() {
        return {
          name:'Ninghao',
          
        };
      },
      components:{AppButton},

      methods:{
        onTapAppButton(text){
          console.log('on tap app button');
        },
        onInitAppButton(text){
          console.log('on init app button')
        }
      }
    };
</script>



<style>



</style>