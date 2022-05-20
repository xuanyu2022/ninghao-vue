<template>
  <div @click="onClickText">你好，欢迎访问宁皓⽹！</div>
</template>

<script>
export default {
  methods: {
    onClickText() {
      this.$router.push('/about');
      // this.$router.replace('/about');
    },
  },
};
</script>
