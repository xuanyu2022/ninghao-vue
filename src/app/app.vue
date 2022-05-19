<template>
  <h3>{{ name }}</h3>
 
<UserProfile />
  
</template>




<script>
import UserProfile from '@/components/user-profile.vue';
 
    export default {
      data() {
        return {
          name:'Ninghao',
          
        };
      },
      components:{
        UserProfile
      },

      methods:{
        onTapAppButton(text){
          console.log('on tap app button');
        },
        onInitAppButton(text){
          console.log('on init app button');
        }
      }


    };
</script>



<style>



</style>