
<template>
  <div>


      <div class='main-two'>
      
        
          <h2><Icon name="ic:baseline-circle" /> WebSites</h2>
          <h2><Icon name="ic:baseline-circle" /> LandPages</h2>
          <h2><Icon name="ic:baseline-circle" /> Sistemas</h2>
        
      </div>


      <div class='main-tree'>
  <div>
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


        <a href="https://deepacupuntura.com" class='main-tree-card deep'>
        </a>
      </div>

      <br>
    </div>
</template>
<style scoped>

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
