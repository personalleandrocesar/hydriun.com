<script setup lang="ts">
useHead({
    titleTemplate: 'Hydrium',
})
</script>

<template>
  <NuxtPage />
</template>

<style scoped>
.logo{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 3.5rem;
  color: #85ebd9;
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
  background-color: #85ebd954;
}

nav a.router-link-exact-active {
  color: #85ebd9;
}

nav a.router-link-exact-active:hover {
  color: var(--color-text);
  color: #85ebd9;
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
