

<template>
    <NavTwo />
    <div class='anima'>


        <div class='main-tree'>


          
          <a href="https://deepacupuntura.com" class='main-tree-card deep'>
            <h4>Deep <br> Acupuntura</h4>

            <div>
              <img src='/img/deep.jpg' alt='' class='mini-profile'>
            </div>
            <div>
              <h5>@deepacupuntura</h5>
              <p>Clínica particular de Medicina Chinesa</p>
            </div>
          </a>
          <a href="https://personal.leandrocesar.com" class='main-tree-card personal'>
            <h4>Personal <br> Leandro Cesar</h4>

            <div>
              <img src='/img/personalleandrocesar.png' alt='' class='mini-profile'>
            </div>
            <div>
              <h5>@personalleandrocesar</h5>
              <p>Personal trainer - Consultoria - Avaliação Física - Krav-maga</p>
            </div>
          </a>
          <a href="https://isaarquitetura.vercel.app/" class='main-tree-card personal'>
            <h4>Isadora Peçanha <br> Arquitetura</h4>

            <div>
              <img src='/img/isaarquiteta.png' alt='' class='mini-profile isa'  >
            </div>
            <div>
              <h5>@isadorapecanha_arquitetura</h5>
              <p>Projetos | Consultoria
               <br>
                RJ e Atende em todo brasil</p>
            </div>
          </a>
          <!-- <a href="https://isaarquitetura.vercel.app/" class='main-tree-card personal'>
            <h4>Isadora Peçanha <br> Arquitetura</h4>
            <iframe id="inlineFrameExample"
      title="Inline Frame Example"
      width="100"
      height="100"
      src="https://isaarquitetura.vercel.app">
  </iframe>


            <div>
              <img src='/img/isaarquiteta.png' alt='' class='mini-profile isa'  >
            </div>
            <div>
              <h5>@isadorapecanha_arquitetura</h5>
              <p>Projetos | Consultoria
               <br>
                RJ e Atende em todo brasil</p>
            </div>
          </a> -->
        </div>
        

        <br>
    </div>
</template>

<style scoped>
@font-face {
  font-family: "naston-regular";
  src: url('~/assets/naston-regular.ttf') format('truetype');
}
i {
  color: var(--color-text);
  font-size: .9em;
  margin: auto;
}

iframe {
  margin-left: 10px;
}

code {
  font-size: 0.5em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px var(--color-text);
}

.main-two {
  font-family: 'Nirequa';
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 -20px 0;
  overflow-x: auto;
  color: var(--color-head);
}

.main-two i {
  font-size: 1.2em;
}

.main-two h5 {
  margin: 40px 10px 20px;
}

.main-tree {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px 0 300px 0;
  flex-wrap: wrap;
  overflow-x: auto;
  font-family: 'naston-regular';
  color: var(--color-text);
}

.main-tree img {
  height: 70px;
}

.main-tree i {
  font-size: 1em;
}


.main-tree h4 {
  margin: 10px 10px 0 10px;
  transition: all .4s linear;
  text-align: center;
  line-height: normal;
  color: var(--color-text);
}

.main-tree h5:nth-child(1) {
  margin: 0px auto 5px auto;

}

.main-tree h5 {
  margin: 0px 10px 0px 10px;
  color: var(--color-head);
  font-size: .6em;
}

.main-tree div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-tree-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: solid 1px var(--color-text);
  border-radius: 3% 3% 3% 3%;
  align-items: center;
  width: 47%;
}


.main-tree a {
  border: solid 3px var(--color-background-mute);
  padding-bottom: 10px;
  margin: 0px 5px 20px 5px;
  border-radius: 20px;
  transform: scale(0.97);
  transition: all .4s linear;
  transform: translateY(1em);
  box-shadow: 0 0 0px var(--color-detail);
}

.main-tree a:hover {
  background-color: var(--color-background-mute);
  transform: translateY(0.9em);
  box-shadow: 0 5px 5px var(--color-detailTwo);
}

.main-tree p {
  padding: 0px;
  margin: 0px 10px 0px 10px;
  font-size: .7em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: var(--color-text);
}

.mini-profile {
  height: 25px;
  border-radius: 20px;
  margin: 10px 10px;
}


@media only screen and (max-width: 382px) {
  .main-tree-card {
    width: 98%;
  }
}</style>
