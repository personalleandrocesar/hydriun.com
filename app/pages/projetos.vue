<template>
  <div class='nav'>
  
        <div class="anima"></div>
        
        <nav>   
          <NuxtLink to="/projetos">ativos</NuxtLink>
          <NuxtLink to="/projetos/em-desenvolvimento">em desenvolvimento</NuxtLink>
        </nav>
    </div>
    
    <NuxtPage />
    
</template>
<style scoped>


.nav div {
  font-family: 'Nirequa';
  width: 100%;
  font-size: 12px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(50px);
  padding: 80px 0px 0px 0;
  z-index: 2;
}

nav {
  font-family: 'Nirequa';
  width: 100%;
  font-size: 12px;
  text-align: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(50px);
  z-index: 2;
}

nav a {
  color: var(--color-title);
  font-weight: bold;
  font-size: .9rem;
}

nav a:hover {
  color: var(--color-detailTwo);
}

nav a.router-link-exact-active {
  color: var(--color-detail);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
