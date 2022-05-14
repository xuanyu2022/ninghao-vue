<template>
  <h3>{{ name }}</h3>
 <div v-if="visible">隐藏的内容!</div>
  <button @click="visible =!visible">{{visible? '隐藏':'显示'}} </button>
</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
          visible:true,
        };
      },
    };
</script>

<style>
  button{
    margin:4px;
  }
</style>