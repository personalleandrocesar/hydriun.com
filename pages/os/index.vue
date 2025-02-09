<script setup lang="ts">
useHead({
    titleTemplate: 'Hydriun',
})
const username = ref("");
const welcomeVisible = ref(false);
const moved = ref(false);

const showMessage = () => {
  if (!welcomeVisible.value) {
    welcomeVisible.value = true;
    setTimeout(() => {
      moved.value = true;
      setTimeout(() => {
        welcomeVisible.value = true;
      }, 500); // Tempo para esconder a mensagem
    }, 3000);
  }
};
</script>

<template>
  <OsNav />
  <header>
    <div class="logo" v-if="!welcomeVisible">
      <h1 v-if="!moved">Hydriun</h1>
      <NuxtLink>
        <input v-if="!moved"
          type="text"
          class="arrow"
          placeholder="Username"
          v-model="username"
          @keyup.enter="showMessage"
        />
      </NuxtLink>
    </div>
  </header>

  <transition name="fade">
    <div v-if="welcomeVisible" class="welcome-message" :class="{ moveUp: moved }">
      <p v-if="!moved">Bem-vindo, {{ username }}!</p>
      <p>O que você deseja fazer?</p>
    </div>
  </transition>
</template>


<style scoped>
.welcome-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.5s ease-in-out;
  z-index: 100;
  color: var(--color-detail);
  font-size: 2rem;
}

.welcome-message.moveUp {
  color: var(--color-text);
  top: 10px;
  left: -20px;
  transform: none;
  background: transparent;
  box-shadow: none;
  font-size: 14px;
}

.fade {
    
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes clickAnimation {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

.animate {
  animation: clickAnimation 3s ease infinite;
}

.logo{
margin: 0 auto 80px auto;
  height: 90vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Nirequa';
  color: var(--color-text);
}

.ani {
    
animation: updown 3s ease infinite;
}

.arrow {
  margin-top: auto;
margin-bottom: 64px;
height: 60px;
width: 300px;
zoom: 0.7;
color: var(--color-detail);
border: none;
background: transparent;
border-bottom: solid 3px var(--color-detail);
font-size: 2rem;
}

input:focus {
  outline: none;
}
input::placeholder {
color: var(--color-detail);
}


h1{
  margin-top: auto;
padding: 0 48px;
    font-size: 3rem;
    margin: 0 auto;
height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
      color: var(--color-detail);
}

h3{
  color: var(--color-text);
  margin-top: -1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 2rem 0 ;
}

nav a {
  color: var(--color-text);
  font-weight: bold;
  font-size: .9rem;
}
nav a:hover {
  color: #33333320;
}

nav a.router-link-exact-active {
  color: #333;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
