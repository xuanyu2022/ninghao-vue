


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
        components: {
        PostList,
      },
    });
</script>