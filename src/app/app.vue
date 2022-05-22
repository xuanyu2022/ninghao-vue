<template>
  <h3 @click="onClickName">{{ name }}</h3>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['name']),
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['getName']),
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
  created() {
    //this.$store.dispatch('getName');
    this.getName();
  },
};
</script>

<style>
@import './styles/app.css';
</style>
