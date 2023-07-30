<template>
  <div class='nav'>
    <div>
        <NavTwo/>
        <nav>
          <h3>Humano</h3>
          <p>Hybrium rejeita a metáfora da área de trabalho e os ecossistemas de aplicativos como fundamentalmente desumanos. 
            Inspirado pelos princípios de Jef Raskin, Hybrium procura oferecer uma visão mais humana da interação humano-computador.</p> 
          <br>
          <h3>Fluido</h3>
          <p>Em vez de pedir às pessoas que modifiquem a maneira como pensam e agem nas caixas de areia arbitrárias dos aplicativos, a 
            Hybrium responde com fluidez às necessidades e intenções de seu usuário.</p> 
          <br>
          <h3>Focado</h3>
          <p>A desordem que consideramos natural nos sistemas operacionais de hoje pode ser esmagadora, especialmente para pessoas 
            sensíveis a estímulos. Hybrium respeita larguras de banda limitadas e períodos de atenção.</p> 
          <br>
          <h3>Familiar</h3>
          <p>Hybrium fornece um vislumbre dos sistemas de amanhã usando paradigmas de interação familiares. Ele foi projetado para 
            tablets multitoque com suporte para teclado, uma categoria de dispositivos geralmente negligenciada como híbridos 
            desajeitados que abrangem dois mundos.</p> 
          <br>
          <NuxtLink to="/projetos">ativos</NuxtLink>
          <NuxtLink to="/projetos/em-desenvolvimento">em desenvolvimento</NuxtLink>
        </nav>
    </div>
    <NuxtPage />
  </div>
</template>
<style scoped>
h1 {
  padding: 0 48px;
  width: 100%;
  font-size: 3rem;
}

h3 {
  padding: 0px 20px 0 20px;
  color: var(--color-text);
  text-align: left;
}

p {
  font-family: 'naston-regular';
  padding: 0 20px;
  color: var(--color-text);
  text-align: left;
}

nav {
  font-family: 'Nirequa';
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 100px 0 0 0;
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
