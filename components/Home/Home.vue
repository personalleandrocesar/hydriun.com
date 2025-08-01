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
      <div>
        <Reveal :delay="400">
            <h3>Personalizado.</h3>
            <p>Hydriun rejeita a metáfora que sites, trabalhos e sistemas, tem que ser tudo igual e desumano. 
              <br>
              A inspiração vem do gosto e do tipo de negócio do Empreendedor, micro e pequeno empresário.</p> 
        </Reveal>
      </div>
            <br>
      <div>
            <Reveal :delay="600">
            <h3>Fluido.</h3>
            <p>Com um toque organização e sutileza, Hydriun usa framworks, para deixar tudo mais fluido ao usuário.</p> 
            </Reveal>
      </div>
            <br>
      <div>
            <Reveal :delay="800">
            <h3>Responsivo.</h3>
            <p>Hydriun fornece um vislumbre nas responsividades, dexando tudo encaixado de acordo com os diferentes dispositivos.</p> 
            </Reveal>
      </div>
            <br>
      <div>
            <Reveal :delay="1000">
            <h3>Clean.</h3>
            <p>Com objetivo claro e real de destacar o que realmente importa.
              <br> 
              Divisões, textos e imagens são muito bem alinhados e pensados quando o layout é minimalista.</p> 
            </Reveal>
      </div>
            <br>
          </div>

      <br>
</template>
          <QuadroSlider />
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
  margin: 0px 0 -20px 0;
  overflow-x:auto;
  color: var(--color-head);
}

.main-tree {
  display: flex;
  text-align: left;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0 200px 0;
  color: var(--color-text);
}

.main-tree p{
  font-family: 'naston-regular';
  
}
@media only screen and (min-width: 1035px) {
.main-tree {    
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 40px 0;
  }
  ;.main-tree p {
      width: 100%;
      padding: 0;
  }
  .main-tree div {
      width: 500px;
      margin: 20px 5px;
  }
}
</style>
