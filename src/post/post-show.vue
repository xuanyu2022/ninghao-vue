<template>
  <div>PostShow {{ $route.params.postId }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  props: {
    postId: String,
  },
  beforeRouteLeave(to, from, next) {
    if (confirm('确定要离开吗？ ')) {
      next();
    }
  },

  created() {
    console.log(this.$route.params.postId);
  },
};
</script>
