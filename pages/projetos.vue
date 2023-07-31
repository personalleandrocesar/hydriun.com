<template>
  <div class='nav'>
        <NavTwo/>
        <div class="anima">
          <h3>Humano</h3>
          <p>Hydrium rejeita a metáfora da área de trabalho e os ecossistemas de aplicativos como fundamentalmente desumanos. 
            Inspirado pelos princípios de Jef Raskin, Hydrium procura oferecer uma visão mais humana da interação humano-computador.</p> 
          <br>
          <h3>Fluido</h3>
          <p>Em vez de pedir às pessoas que modifiquem a maneira como pensam e agem nas caixas de areia arbitrárias dos aplicativos, a 
            Hydrium responde com fluidez às necessidades e intenções de seu usuário.</p> 
          <br>
          <h3>Focado</h3>
          <p>A desordem que consideramos natural nos sistemas operacionais de hoje pode ser esmagadora, especialmente para pessoas 
            sensíveis a estímulos. Hydrium respeita larguras de banda limitadas e períodos de atenção.</p> 
          <br>
          <h3>Familiar</h3>
          <p>Hydrium fornece um vislumbre dos sistemas de amanhã usando paradigmas de interação familiares. Ele foi projetado para 
            tablets multitoque com suporte para teclado, uma categoria de dispositivos geralmente negligenciada como híbridos 
            desajeitados que abrangem dois mundos.</p> 
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
  padding: 0px 0 80px 0;
  backdrop-filter: blur(50px);
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
