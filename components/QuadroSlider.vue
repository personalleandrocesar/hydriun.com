<!-- components/QuadroSlider.vue -->
<template>
  <div class="slider-container">
    <div class="slider-content">
      <div
        v-for="(quadro, index) in quadros"
        :key="index"
        class="quadro"
        :class="{ active: index === quadroAtual }"
      >
        <h2>{{ quadro.titulo }}</h2>
        <p>{{ quadro.texto }}</p>
      </div>
    </div>
    <div class="controles">
      <button @click="anterior" :disabled="quadroAtual === 0">←</button>
      <button @click="proximo" :disabled="quadroAtual === quadros.length - 1">→</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const quadros = ref([
  {
    titulo: 'PERSONALIZADO.',
    texto: 'Hydriun rejeita a metáfora que sites, trabalhos e sistemas, tem que ser tudo igual e desumano...'
  },
  {
    titulo: 'FLUIDO.',
    texto: 'Com um toque de organização e sutileza, Hydriun usa frameworks para deixar tudo fluido...'
  },
  {
    titulo: 'RESPONSIVO.',
    texto: 'Hydriun fornece um vislumbre nas responsividades, deixando tudo encaixado...'
  },
  {
    titulo: 'CLEAN.',
    texto: 'Com objetivo claro e real de destacar o que realmente importa...'
  }
])

const quadroAtual = ref(0)

const proximo = () => {
  if (quadroAtual.value < quadros.value.length - 1) quadroAtual.value++
}

const anterior = () => {
  if (quadroAtual.value > 0) quadroAtual.value--
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  background: #e0faff;
  padding: 2rem;
  border-radius: 1rem;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.quadro {
  min-width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  top: 2rem;
  left: 0;
  padding: 1rem;
  transform: scale(0.95);
}

.quadro.active {
  position: relative;
  opacity: 1;
  transform: scale(1);
}

.controles {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

button {
  background: #00ffff;
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
</style>
