<template>
  <div class='nav'>
    <div>
      <div>
        <nav>
          <NuxtLink to="/projetos/ativos">ativos</NuxtLink>
          <NuxtLink to="/projetos/em-desenvolvimento">em desenvolvimento</NuxtLink>
        </nav>
      </div>
    </div>
    <NuxtPage/>
  </div>
</template>
<style scoped>
h1 {
  padding: 0 48px;
  width: 100%;
  font-size: 3rem;
}

h3 {
  color: var(--color-text);
  margin-top: -1rem;
}

nav {
  font-family: 'Nirequa';
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0;
  position: sticky;
  top: .1px;
  background: hsla(0, 0%, 86.7%, .8);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 2;
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
}

nav a:first-of-type {
  border: 0;
}
</style>
