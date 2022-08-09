<template>
  <div v-if="showPost">
    <h1>{{ post.title }}</h1>
    <div>
    {{ post.content }} - <small>{{ post.user.name }}</small>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapGetters,mapActions } from 'vuex';

  export default defineComponent({
    props: {
      postId: String,
    },

    computed: {
        ...mapGetters({
          loading: 'post/show/loading',
          post: 'post/show/post',
        }),
        showPost() {
          return !this.loading && this.post;
        },
      },

    created() {
        this.getPostById(this.postId);
        },
        methods: {
        ...mapActions({
        getPostById: 'post/show/getPostById',
        }),
        },
  });
</script>