<template>
    <div class='nav'>
        <div>
            <div>
              <nav>
                <NuxtLink to="/projetos">PROJETOS</NuxtLink>
                <NuxtLink to="/sobre">SOBRE</NuxtLink>
              </nav>
            </div>
        </div>
    </div>

</template>
<style scoped>

h1{
  padding: 0 48px;
  width: 100%;
  font-size: 3rem;
}

h3{
  color: var(--color-text);
  margin-top: -1rem;
}

nav {
  font-family: 'Nirequa';
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 ;
  position: fixed;
  top: .1px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 2;
}

nav a {
  color: var(--color-detail);
  font-weight: bold;
  font-size: .9rem;
}
nav a:hover {
  color: var( --color-hover);
}

nav a.router-link-exact-active {
  color: var(--color-a);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
