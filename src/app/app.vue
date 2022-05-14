<template>
  <h3>{{ name }}</h3>
  <div v-for="(post,index)  in postList" :key="post.id">
     {{index + 1}} {{ post.content }} - <small>{{ post.author }}</small>
  </div>
</template>



<script>
    export default {
      data() {
        return {
          name:'Ninghao',
          postList: [
             {
                id: 1,
                content: '故⼈西辞黄鹤楼，烟花三⽉下扬州',
                author: '李⽩',
              },
              {
                id: 2,
                content: '好⾬知时节，当春乃发⽣',
                author: '杜甫',
              },
              {
                id: 3,
                content: '浔阳江头夜送客，枫叶荻花秋瑟瑟',
                author: '⽩居易',
              },
          ],
        };
      },
    };
</script>

<style>
  button{
    margin:4px;
  }
</style>