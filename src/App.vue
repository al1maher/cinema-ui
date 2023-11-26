<template>
  <div :dir="direction">
    <button @click="toggleDirection" class="font-sans text-white bg-accent px-3 py-2 rounded-xl my-5 mx-10">Toggle Direction</button>
    <div class="container">
      <MainContent />
    </div>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue'
export default {
  name: 'App',
  components: {
    MainContent
  },
  data() {
    return {
      direction: 'rtl'
    }
  },
  methods: {
    toggleDirection() {
      this.direction = this.direction === 'rtl' ? 'ltr' : 'rtl'
    }
  }
}
</script>

<style>
body {
  @apply bg-background;
}
:root {
  --accent-color: #8a74f9;
}

.active\:outline-accent:focus {
  outline: 2px solid var(--accent-color);
}

.active\:border-accent:focus {
  border-color: var(--accent-color);
}
</style>
