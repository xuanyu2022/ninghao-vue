<template>
  <h3>{{ name }}</h3>
 
 <!--<div v-if="visible">隐藏的内容!</div>
  <button @click="visible =!visible">{{visible? '隐藏':'显示'}} </button>-->

 <div class="menu">
    <div 
        :class="['menu-item',{active:currentItem===index}]"
        @click="currentItem=index"
        v-for="(item,index) in menuItems" :key="index"
    >
    {{item}}
    </div>
</div>
</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
          visible:true,
          menuItems:['首页','热门','发布'],
          currentItem:0,
        };
      },
    };
</script>



<style>
@import './styles/app.css';
</style>