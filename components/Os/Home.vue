<script setup>
import Reveal from '@/components/Animacoes/Reveal.vue';
</Script>
<template>
<div  id='login' class="ani"></div>

<Reveal :delay="100">
      <div class='main-two'>
      
          <h2>login</h2>
        
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
