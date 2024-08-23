<template>
<div  id='websites' class="ani"></div>
  <div>


      <div class='main-two'>
      
        
          <h2><Icon name="ic:baseline-circle" /> WebSites</h2>
          <!-- <h2><Icon name="ic:baseline-circle" /> LandPages</h2> -->
          <h2><Icon name="ic:baseline-circle" /> Sistemas</h2>
        
      </div>


      <div class='main-tree'>
  <div>
            <h3>Personalizado</h3>
            <p>Hydriun rejeita a metáfora que sites, trabalhos e sistemas, tem que ser tudo igual e desumano. 
              <br>
              A inspiração vem do gosto e do tipo de negócio do Empreendedor, micro e pequeno empresário.</p> 
            <br>
            <h3>Fluido</h3>
            <p>Com um toque organização e sutileza, Hidrium usa framworks, para deixar tudo mais fluido ao usuário.</p> 
            <br>
            <h3>Responsivo</h3>
            <p>Hydriun fornece um vislumbre nas responsividades, dexando tudo encaixado de acordo com os diferentes dispositivos.</p> 
            <br>
            <h3>clean</h3>
            <p>Com objetivo claro e real de destacar o que realmente importa.
              <br> 
              Divisões, textos e imagens são muito bem alinhados e pensados quando o layout é minimalista.</p> 
            <br>
          </div>

      </div>

      <br>
    </div>
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
  width: 44%;
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
  .main-tree-card {
    width: 90%;
  }
}
</style>
