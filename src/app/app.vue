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
        <transition
          name="custom-classes"
          enter-active-class="animate__animated animate__tada"
          leave-active-class="animate__animated animate__bounce"
        >
          <!-- <div v-if="isActive" class="emoji">🌵</div> -->
          <!--  <div v-if="isActive" class="emoji">👻</div> -->
          <component :is="currentEmoji"></component>
        </transition>
      </div>
      <div class="card__action">
        <button @click="isActive = !isActive">请按这⾥</button>
      </div>
    </div>
  </div>
</template>

<script>
import GhostEmoji from './components/ghost-emoji.vue';
import RobotEmoji from './components/robot-emoji.vue';

export default {
  data() {
    return {
      name: '宁皓⽹',
      isActive: true,
    };
  },
  computed: {
    currentEmoji() {
      return this.isActive ? 'GhostEmoji' : 'RobotEmoji';
    },
  },
  components: {
    GhostEmoji,
    RobotEmoji,
  },
};
</script>
<style>
@import './styles/app.css';
@import './styles/card.css';
@import './styles/animate.css';
</style>
