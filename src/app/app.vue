<template>
  <h3>{{ name }}</h3>
  
<input type="text" @keyup.enter="onKeyupContent" />

</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
         
         };
      },
  methods: {
onKeyupContent(event) {
  console.log('回车');
},
},
    };
</script>



<style>
@import './styles/app.css';
</style>