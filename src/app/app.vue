<template>
  <div class="page">
    <div class="card">
      <div class="card__header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & Animation</div>
      </div>
      <div class="card__content">
        <!--  <div :class="['emoji', { hidden: !isActive }]">🌲</div> -->
        <!--  <div :class="['emoji', { pulse: isActive }]">😍</div> -->
        <!--    <transition-group
          name="custom"
          leave-active-class="animate__animated animate__tada"
        >
          <div class="emoji" v-for="emoji in emojiList" :key="emoji">
            {{ emoji }}
          </div>
        </transition-group>
      </div>

      <div class="card__action">
        <button @click="shuffle" :class="{ active: isActive }">
          洗牌
        </button>
        <button @click="pop">
          删除
        </button> -->
        <div class="emoji">{{ animatedNumber }}</div>
      </div>
      <div class="card__action">
        <button @click="number = number + 10" :class="{ active: isActive }">
          请按这⾥
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import gsap from 'gsap';

export default {
  data() {
    return {
      name: '宁皓⽹',
      isActive: true,
      emojiList: ['🌲 ', '🌳 ', '🌴'],
      number: 0,
      tweenedNumber: 0,
    };
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    },
  },
  methods: {
    shuffle() {
      this.emojiList = _.shuffle(this.emojiList);
    },
    pop() {
      this.emojiList.pop();
    },
  },
};
</script>

<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
