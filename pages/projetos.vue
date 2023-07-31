<template>
  <div class='nav'>
        <div class="anima">
         <h3>Personalizado</h3>
              <p>Hydrium rejeita a metáfora que sites, trabalhos e sistemas, tem que ser tudo igual e desumano. 
                <br>
                A inspiração vem do gosto e do tipo de negócio do Empreendedor, micro e pequeno empresário.</p> 
              <br>
              <h3>Fluido</h3>
              <p>Com um toque organização e sutileza, Hidrium usa framworks, para deixar tudo mais fluido ao usuário.</p> 
              <br>
              <h3>Responsivo</h3>
              <p>Hydrium fornece um vislumbre nas responsividades, dexando tudo encaixado de acordo com os diferentes dispositivos.</p> 
              <br>
              <h3>clean</h3>
              <p>Com objetivo claro e real de destacar o que realmente importa.
                <br> 
                Divisões, textos e imagens são muito bem alinhados e pensados quando o layout é minimalista.</p> 
              <br>
        </div>
        <hr>
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
  padding: 100px 0px 0px 0;
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
