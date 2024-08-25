<script setup>
import Reveal from '@/components/Animacoes/Reveal.vue';
</Script>
<template>
<div  id='websites' class="ani"></div>

<Reveal :delay="100">
      <div class='main-two'>
      
        
          <h2><Icon name="ic:baseline-circle" /> WebSites</h2>
          <h2><Icon name="ic:baseline-circle" /> Sistemas</h2>
          <!-- <h2><Icon name="ic:baseline-circle" /> LandPages</h2> -->
        
      </div>
</Reveal>
      <div class='main-tree'>
        <Reveal :delay="400">
            <h3>Personalizado.</h3>
            <p>Hydriun rejeita a metáfora que sites, trabalhos e sistemas, tem que ser tudo igual e desumano. 
              <br>
              A inspiração vem do gosto e do tipo de negócio do Empreendedor, micro e pequeno empresário.</p> 
        </Reveal>
            <br>
            <Reveal :delay="600">
            <h3>Fluido.</h3>
            <p>Com um toque organização e sutileza, Hidrium usa framworks, para deixar tudo mais fluido ao usuário.</p> 
            </Reveal>
            <br>
            <Reveal :delay="800">
            <h3>Responsivo.</h3>
            <p>Hydriun fornece um vislumbre nas responsividades, dexando tudo encaixado de acordo com os diferentes dispositivos.</p> 
            </Reveal>
            <br>
            <Reveal :delay="1000">
            <h3>Clean.</h3>
            <p>Com objetivo claro e real de destacar o que realmente importa.
              <br> 
              Divisões, textos e imagens são muito bem alinhados e pensados quando o layout é minimalista.</p> 
            </Reveal>
            <br>
          </div>

      <br>
</template>
<style scoped>
@keyframes updown {
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

.ani {
    
animation: updown 3s ease infinite;
}


@font-face {
  font-family: "naston-regular";
  src: url('~/assets/naston-regular.ttf') format('truetype');
}

.icon {
  zoom: .1;
}

.main-two {
  font-family: 'Nirequa';
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 80px 0 -20px 0;
  overflow-x:auto;
  color: var(--color-head);
}

.main-tree {
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  margin: 40px 0 200px 0;
  overflow-x: auto;
  color: var(--color-text);
}

.main-tree p{
  font-family: 'naston-regular';
  
}
.main-tree img {
  height: 70px;
  border-radius: 50%;
}


.main-tree-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: solid 1px var(--color-text);
  border-radius: 3% 3% 3% 3%;
  align-items: center;
}


.main-tree a {
  border: solid 1px #00bd7e30;
  padding-bottom: 10px;
  margin: 0px 5px 20px 5px;
  border-radius: 3% 3% 3% 3%;
  transform: scale(0.97);
  transition: all .4s linear;
  transform: translateY(1em);
  box-shadow: 0 0 0px #ddd;
}

.main-tree a:hover {
  background-color: var(--color-background);
  transform: translateY(0.8em);
  box-shadow: 0 5px 5px #999;
}

@media only screen and (max-width: 382px) {
  .main-tree {
  }
}
</style>
