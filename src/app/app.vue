<template>
  <h3>{{ name }}</h3>
  
<input type="text" @input="onInputContent" />

</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
         
         };
      },
  methods: {
onInputContent(event) {
console.log(event);
},
},
    };
</script>



<style>
@import './styles/app.css';
</style>