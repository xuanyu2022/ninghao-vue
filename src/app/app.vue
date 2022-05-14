<template>
<h3>{{ name }}</h3>
{{processStatus}}
</template>



<script>
export default {
  data() {
      return {
        name: 'Ninghao',
      };
  },

computed:{

  processStatus(){
    return this.name ==='Ninghao'? '初始化...' : '成功设置了数据';
  }
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