<template>
  <h3>{{ name }}</h3>
  
<input type="text" @change.enter="onChangeContent" />

</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
         
         };
      },
  methods: {
onChangeContent(event) {
  console.log(event.target.value);
},
},
    };
</script>



<style>
@import './styles/app.css';
</style>