<template>
<h3>{{ name }}</h3>
</template>



<script>
export default {
  data() {
      return {
        name: 'Ninghao',
      };
  },

  created(){
    console.log('APP 组件已创建');
    this.setName();
   
  },

  methods:{
    setName(){
         setTimeout(()=>{
           this.name = '宁皓⽹';
         },3000);
    },
  },
};
</script>