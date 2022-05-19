<template>
  <h3>{{ name }}</h3>
 
  <AppButton text="确定" @tap="onTapAppButton" @init="onInitAppButton"> </AppButton>
  <AppButton />
  <app-button/>
  <app-button></app-button>
  <AppDemoButton />
</template>



<script>
import AppButton from '@/components/app-button.vue';
 import AppDemoButton from '@/components/app-demo-button.vue';
    export default {
      data() {
        return {
          name:'Ninghao',
          
        };
      },
      components:{AppButton,AppDemoButton},

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