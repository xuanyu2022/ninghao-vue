


<template>
 <!-- <div>PostIndex</div> -->
    <PostList />
</template>
<script>
 // import { apiHttpClient } from '@/app/app.service';
  // export default {
  //   async created() {
  //     const response = await apiHttpClient.get('/posts');
  //     console.log(response);
  //   },
  // };
    import { defineComponent } from 'vue';
    import PostList from './components/post-list';
      export default defineComponent({
        title() {
           return '内容列表';
         },
        components: {
            PostList,
         },
      });
</script>