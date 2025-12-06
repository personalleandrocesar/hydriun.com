<template>
    <div class='nav'>
        <div>
            <div>
              <nav>
                <NuxtLink to="/projetos">PROJETOS</NuxtLink>
                <NuxtLink to="/sobre">SOBRE</NuxtLink>
              </nav>
              <NuxtLink class="login" to="/os">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 8V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2"/><path d="M15 12H3l3-3m0 6l-3-3"/></g></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

</template>
<style scoped>
nav {
  font-family: 'Nirequa';
  width: 100%;
  font-size: 12px;
  text-align: center;
  padding: 15px 0 ;
  position: fixed;
  top: 0px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 2;
  background: linear-gradient(to bottom right, #20a9b210 0%,#20a9b210 50%,#20a9b230 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  color: #999;
  font-weight: bold;
  margin: 0 1.5rem;
  font-size: .9rem;
  padding-top: 4px;
}
nav a:hover {
  color: #20a9b2;
}

nav a.router-link-exact-active {
  color: var(--color-detail);
}

nav a {
}

nav a:first-of-type {
  border: 0;
}

.login {
  z-index: 20;
  position: fixed;
  top: 17px;
  right: 15px;
  color: #999;
}
</style>
