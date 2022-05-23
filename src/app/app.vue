<template>
  <h3 @click="onClickName">
    {{ name }}
    <span v-if="loading">加载中...</span>
  </h3>
  <!-- {{ userStateModule.currentUser }} -->
  {{ currentUser }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    // ...mapGetters(['name']),
    ...mapGetters({
      name: 'name',
      currentUser: 'userStateModule/currentUser',
    }),
    ...mapState(['loading', 'userStateModule']),
  },

  created() {
    //this.$store.dispatch('getName');
    this.getName();
    this.getCurrentUser();
  },

  methods: {
    ...mapMutations(['setName']),
    //...mapActions(['getName', 'getCurrentUser']),
    ...mapActions({
      getName: 'getName',
      getCurrentUser: 'userStateModule/getCurrentUser',
    }),
    onClickName() {
      if (this.$store.state.name === '宁皓⽹') {
        //this.$store.commit('setName', 'NINGHAO');
        this.setName('NINGHAO');
      } else {
        //this.$store.commit('setName', '宁皓⽹');
        this.setName('宁皓网');
      }
    },
  },
  //
  //
};
</script>

<style>
@import './styles/app.css';
</style>
