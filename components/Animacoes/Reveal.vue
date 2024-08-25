<template>
  <div
    :class="{ reveal: true, active: isVisible }"
    :style="{ transitionDelay: delay + 'ms' }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  delay: {
    type: Number,
    default: 0,
  },
});

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.unobserve(entry.target); // Para parar de observar após ativar
      }
    });
  });

  const element = document.querySelector('.reveal');
  if (element) {
    observer.observe(element);
  }
});
</script>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
