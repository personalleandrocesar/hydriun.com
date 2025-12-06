<script setup lang="ts">
useHead({
    titleTemplate: 'Hydriun',
})

</script>

<template>

  <Nav/>
  <header>
  
    <div class='logo'>
    
        <h1 class=''>Hydriun</h1>
        <NuxtLink :to="{path:'/', hash: '#websites'}" class="animate">
         <svg class='arrow' @click='logout' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --><path fill="currentColor" d="M11.998 20.92q-.16 0-.296-.057t-.267-.186l-5.427-5.421q-.14-.14-.15-.344t.13-.35q.146-.166.357-.156q.21.01.357.156l4.798 4.784V12.73q0-.213.144-.356t.357-.144t.356.144t.143.356v6.637l4.823-4.804q.136-.14.339-.14t.353.145q.137.134.137.341t-.14.348l-5.446 5.421q-.132.13-.27.187t-.298.055m.001-10.69q-.213 0-.356-.144T11.5 9.73v-2q0-.213.144-.357t.357-.143t.356.143t.143.357v2.019q0 .205-.144.343t-.357.138m0-5q-.213 0-.356-.144T11.5 4.73v-1q0-.213.144-.356t.357-.144t.356.144t.143.356v1.019q0 .205-.144.343t-.357.138"/></svg>
        </NuxtLink>

    </div>
    
  </header>
  
  <Home/>
  
</template>

<style scoped>

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
-webkit-animation: updown 3s ease infinite;
animation: updown 3s ease infinite;
height: 60px;
zoom: 1;
color: var(--color-detail);
}

h1{
  margin-top: auto;
padding: 0 48px;
    font-size: 3rem;
    margin: 0 auto;
height: 100vh;
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
