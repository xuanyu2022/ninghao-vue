<template>
  <h3 @click="name = 'NINGHAO'">{{ name }}</h3>
</template>

<script>
export default {
  data() {
    return {
      name: 'Ninghao',
    };
  },
  created() {
    console.log(this.$data);
  },

  /* created() {
    const user = {
      name: '宁皓⽹',
    };
  },
  const handler = {
       // get() {
        //return 'NINGHAO'; }
      get(target, property) {
        return target[property];
      },
      set(target, property, value) {
        if (property === 'name') {
          if (value.length > 10) {
            throw new Error('名字太长了！ ');
          }
        }
        return Reflect.set(target, property, value);
      },
    };

    const userProxy = new Proxy(user, handler);

    try {
      userProxy.name = 'NINGHAO1';
    } catch (error) {
      console.log('错误： ', error.message);
    }
    console.log(userProxy.name);
  },*/
};
</script>

<style>
@import './styles/app.css';
</style>
