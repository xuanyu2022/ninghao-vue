<template>
  <h3>{{ name }}</h3>
 
  <AppButton> </AppButton>
  <AppButton />
  <app-button/>
  <app-button></app-button>
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
    };
</script>



<style>


.button {
outline: none;
border: none;
background: #e1e1e1;
color: #5a5a5a;
padding: 8px 16px;
margin: 4px;
cursor: pointer;
border-radius: 3px;
}
.button:active {
opacity: 0.8;
}

</style>