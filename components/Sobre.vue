<template>
  <div class="logoAnimationOne">

    <div class='main-tree'>
      <div>
        <h5><Icon name="material-symbols:person" /> Sobre</h5>
      </div>
    </div>


    <div class='profile'>
      <img @click="image" src='/img/myFotoTwo.jpg' alt='' name="Image">
      <div>
        <h1>Leandro Cesar Ramos da Costa</h1>
        <a to="">
           <Icon name="material-symbols:business-center-rounded" /> Empreendedor
        </a>

      </div>
    </div>
    <div class='main-one'>
      <a href="https://deepacupuntura.com">
        <Icon name="bi:building-fill" /> Dono do Deep Acupuntura
      </a>
      <a>
        <Icon name="material-symbols:exercise" /> Profissional de Educação Física
      </a>
      <a>
        <Icon name="healthicons:award-ribbon" /> Acupunturista
      </a>
      <a>
        <Icon name="material-symbols:code-blocks" /> Programador
      </a>
      <a>
       <Icon name="material-symbols:sports-martial-arts-rounded" /> Instrutor de Krav-maga
      </a>
      <a href="https://github.com/personalleandrocesar">
        <Icon name="mdi:github" /> @personalleandrocesar
      </a>
      <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4268569U7">
        <Icon name="ph:files-bold" /> Currículo Lattes - CNPQ
      </a>
    </div>
<br>
    <div class='main-four'>
      <div class='main-four-card'>
        <p>
         <Icon name="solar:square-academic-cap-2-bold" /> Graduação em Educação Física - UNIVERSIDADE SALGADO DE OLIVEIRA -
          UNIVERSO (2005 - 2008);
          <br>
          <Icon name="mingcute:certificate-fill" /> Pós-Graduação Lato-Sensu (especialização) em Acupuntura - UNIVERSIDADE
          CELSO LISBOA - UCL (2018 - 2022);
          <!-- <br>
          <Icon name="material-symbols:business-center-rounded" /> Graduando em Análise e Desenvolvimento de Sistemas -
          UNIVERSIDADE ESTÁCIO - ESTÁCIO (2023 - atual);
        -->
          <br>
          <Icon name="mingcute:certificate-line" /> Pós-Graduando em Cinesiologia, Biomecânica e Treinamento Físico -
          UNIVERSIDADE CASTELO BRANCO - UCB (2021 - atual);
          <br>
          <Icon name="mingcute:certificate-line" /> Pós-Graduando em Lesões e Doenças Musculoesqueléticas: Exercício
          Físico e Reabilitação - UNIVERSIDADE CASTELO BRANCO - UCB (2021 - atual);
          <br>
          <Icon name="game-icons:kimono" /> Instrutor de Krav-maga (Brown Belt) - BUKAN;
          <br>
          <Icon name="iconoir:yoga" /> Quase Professor de Yoga - SHIVA STUDIO;
        </p>

      </div>
    </div>
<div class="main-two">
  <div>

    <a href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20na%20sua%20Consultoria%20e%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
      <Icon name="fa6-brands:square-whatsapp" /> WhatsApp
    </a>
    <a href="mailto:personal@leandrocesar.com">
      <Icon name="ic:outline-alternate-email" /> E-mail
    </a>
    <a href="https://github.com/personalleandrocesar">
      <Icon name="mdi:github" /> GitHub
    </a>

    <a href="https://instagram.com/personalleandrocesar">
      <Icon name="uil:instagram-alt" /> Instagram
    </a>
    <a href="https://www.youtube.com/@personalleandrocesar">
      <Icon name="ph:youtube-logo-fill" /> Youtube
    </a>
  </div>
</div>

<div class='main-tree'>
  <div>

        <h5><Icon name="mdi:timeline-check" /> Linha do tempo</h5>
        <ContentSlot name="imc-one"/>
      </div>
    </div>

    <div class='main-five'>
      <div class='main-five-card'>
        <!-- <h4 class='dateYear'>|</h4>
        <h4 @click='doisTres' class='dateYear' :class='{ dateYearHover: aplicarNine }'>2023</h4> -->
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisDois' class='dateYear' :class='{ dateYearHover: aplicarEight }'>2022</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='doisUm' class='dateYear' :class='{ dateYearHover: aplicar }'> 2021</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umOito' class='dateYear' :class='{ dateYearHover: aplicarTwo }'> 2018</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umSete' class='dateYear' :class='{ dateYearHover: aplicarTree }'> 2017</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='umUm' class='dateYear' :class='{ dateYearHover: aplicarFour }'> 2011</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='zeroOito' class='dateYear' :class='{ dateYearHover: aplicarFive }'> 2008</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='zeroCinco' class='dateYear' :class='{ dateYearHover: aplicarSix }'> 2005</h4>
        <h4 class='dateYear'>|</h4>
        <h4 @click='oitoSeis' class='dateYear' :class='{ dateYearHover: aplicarSeven }'> 1986</h4>
        <h4 class='dateYear'>|</h4>
        <br>

      </div>
    </div>

    <div class='main-six'>
      <div class='main-six-card'>
        <div v-html='acontecimentos'></div>

      </div>
    </div>






    <br>
    <br>
    <br>

  </div>
</template>
<script>

export default {
  head: {
    title: "Sobre | Leandro Cesar",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Professor Leandro Cesar Ramos da Costa | Site para Conteúdos e Serviços => Personal Trainer | Consultoria Online e Presencial | Acupuntura | Atendimentos em Niterói e São Gonçalo - RJ" },
      { hid: "keywords", name: "description", content: "Personal trainer, Acupuntura, Consultoria" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" },
      { rel: "shortcut icon", type: "image/x-icon", href: "/img/favicon.svg" },
      { rel: "apple-touch-icon", size: "180x180", href: "/img/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", size: "32x32", href: "/img/favicon-32x32.png" },
      { rel: "icon", type: "image/png", size: "16x16", href: "/img/favicon-16x16.png" },
      { rel: "apple-touch-icon", size: "180x180", href: "/img/apple-touch-icon.png" },
      { rel: "mask-icon", href: "/img/safari-pinned-tab.svg", color: "#002937" }
    ],
  },
  data() {
    return {
      image: '',
      aplicar: "",
      aplicarTwo: "",
      aplicarTree: "",
      aplicarFour: "",
      aplicarFive: "",
      aplicarSix: "",
      aplicarSeven: "",
      aplicarEight: true,
      aplicarNine: "",
      acontecimentos: `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conclusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa;
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          `}
  },
  methods: {
    doisUm() {
      this.aplicar = true,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos = `
        <h4 style="margin-left: 10px;"> Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Cinesiologia, Biomecânica e Treinamento Físico - Universidade
              Castelo Branco - UCB;
            </li>
          </ul>
          <h4 style="margin-left: 10px;"> Julho</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Lesões e Doenças Musculoesqueléticas: Exercício Físico e Reabilitação - Universidade
              Castelo Branco - UCB;
            </li>
          </ul>
        <h4 style="margin-left: 10px;"> Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Reinício do estágio em Acupuntura - Pós Pandemia (COVID-19);
            </li>
          </ul>
          `;
    },
    umOito() {
      this.aplicar = false,
        this.aplicarTwo = true,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos = `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Pós-Graduação em Acupuntura - Universidade Celso Lisboa - UCB;
            </li>
          </ul>
          `;
    },
    umSete() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = true,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
          <h4 style="margin-left: 10px;">Março</h4>
        <ul class="com-bullet com-indent">
          <li>
            Início do curso de Formação de Professor de Yoga - Shiva Studio - Rio de Janeiro - RJ;
          </li>
          </ul>
          `;
    },
    umUm() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = true,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Novembro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Março</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Formação de Instrutor de Krav-Maga - Bukan School of Krav-maga - Rio de Janeiro - RJ;
            </li>
          </ul>
          `;
    },
    zeroOito() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = true,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Término do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `;
    },
    zeroCinco() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = true,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do curso de Graduação em Educação Física - Universidade Salgado de Oliveita - UNIVERSO;
            </li>
          </ul>
          `;
    },
    oitoSeis() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = true,
        this.aplicarEight = false,
        this.aplicarNine = false,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Outubro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Nascimento no dia 08 - Neves - São Gonçalo - RJ;
            </li>
          </ul>
          `;
    },
    doisDois() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = true,
        this.aplicarNine = false,
        this.acontecimentos =
        `
          <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Conclusão do curso de Pós-Graduação Lato-sensu em Acupuntura - Universidade Celso Lisboa - UCL;
            </li>
            <li>
              Finalizando o estágio em Acupuntura na Celso Lisboa - UCL;
            </li>
          </ul>
        <h4 style="margin-left: 10px;">Janeiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Site deepacupuntura.com no ar;
            </li>
            <li>
              Curso de aprimoramento teórico e prático de Acupuntura Escalpiana de Jiao Shunfa;
            </li>
            <li>
              Início dos trabalhos da Deep Acupuntura na academia BodyClass;
            </li>
          </ul>
          `;
    },
    doisTres() {
      this.aplicar = false,
        this.aplicarTwo = false,
        this.aplicarTree = false,
        this.aplicarFour = false,
        this.aplicarFive = false,
        this.aplicarSix = false,
        this.aplicarSeven = false,
        this.aplicarEight = false,
        this.aplicarNine = true,
        this.acontecimentos =
        `
        <h4 style="margin-left: 10px;">Fevereiro</h4>
          <ul class="com-bullet com-indent">
            <li>
              Início do Curso de graduação em Análise e Desenvolvimento de Sitemas na Universidade Estácio;
            </li>
          </ul>
          `;
    },

  }
}
</script>

<style scoped>
body {
  font-family: 'Philosopher', sans-serif;
  color: var(--color-text);
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

.icon {
  color: var(--color-text);
  zoom: .3;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color: #888;
}

.divider {
  height: 15px;
  background-color: var(--color-text)54;
}

.nav-one {
  height: 35px;
  position: sticky;
  top: -1px;
}

.nav-one div {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.nav-one a {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one p path {
  text-decoration: none;
  margin: 0 14px 0 6px;
  font-size: 1.2em;
}

.nav-one path {
  color: #0000FF;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0 5px 0;
  color: var(--color-text);
}

.profile a {
  text-decoration: none;
  color: var(--color-text);
  font-size: .9em;
  margin-left: 20px;
}

.profile img {
  height: 90px;
  border-radius: 50%;
  margin-left: 10px;
  padding: 0 25px 0 0;
}

.profile h1 {
  margin: 5px 10px 0 10px;
  font-size: 1.3em;
  color: var(--color-text);
}


.profile h4 {
  margin: 0 0 0 -10px;
  font-size: .9em;
  font-weight: 100;
  color: var(--color-text);
}

.main-one {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px 0 15px 0;
  color: var(--color-text);
}

.main-one div {
  margin: 0 0 0 15px;
}

.main-one a:nth-child(1) .icon {
  padding-right: 2px;
  text-decoration: underline;
  margin: 0 0 0 2px;
}

.main-one a:nth-child(2) .icon {
  padding-right: 0px;
  margin: 0 0 0 -1px;
}

.main-one a:nth-child(3) .icon {
  padding-right: 2px;
  margin: 0 0 0 0px;
}

.main-one a {
  margin: 0 0 0 10px;
  color: var(--color-text);
}
.main-two {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 0 45px 0px;
  color: var(--color-text);
}

.main-two div {
  display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

.main-two .icon {
  font-size: 20px;
  margin: 2px 0;
  transition: all .4s linear;
}

.main-two a:hover:nth-child(1) .icon {
  color: green;
}
.main-two a:hover:nth-child(2) .icon {
  color: orange
}
.main-two a:hover:nth-child(3) .icon {
  color: #9b9b9b;
}
.main-two a:hover:nth-child(4) .icon {
  color: #C13584;
}
.main-two a:hover:nth-child(5) .icon {
  color: red;
}


.main-two a {
  border: solid .1px var(--color-text)54;
  height: 55px;
  width: 55px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  font-size:.7em;
  transition: all .4s linear;
  margin: 0px 4px 20px 4px;
  border-radius: 15% 15% 15% 15%;
}
.main-two a:hover {
  background-color: var(--color-text)10;
  color: var(--color-text);
}


.main-tree {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-tree .icon {
  font-size: 1.2em;
  color: var(--color-text);
}

.main-tree h5 {
  margin-left: 10px;
}

.main-four {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0 30px 0;
  color: var(--color-text);
  overflow-x: auto;
}
@media only screen and (max-width: 310px) {
  .main-four {
      margin: 0px 0 20px 0;
    }
}

@media only screen and (min-width: 340px) {
  .main-four {
      margin: 0px 0 0px 0;
    }
}
@media only screen and (min-width: 370px) {
  .main-four {
      margin: 0px 0 -15px 0;
    }
}

@media only screen and (min-width: 470px) {
  .main-four {
      margin: 0px 0 -80px 0;
    }
}
@media only screen and (min-width: 680px) {
  .main-four {
      margin: 0px 0 -120px 0;
    }
}

.main-four .icon {
  font-size: 1.1em;
}

.main-four h5 {
  margin-left: 10px;
}

.main-four-card {
  height: 350px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-four-card .icon:nth-child(9),
i:nth-child(11),
i:nth-child(15) {
  color: var(--color-text);
}

.main-four-card a {
  border: solid .1px var(--color-text);
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-four-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-four-card h4 {
  margin: 0 0 0 10px;
}

.main-four-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-five {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-five .icon{
  font-size: 1.2em;
  color: var(--color-text);
}

.main-five h5 {
  margin-left: 10px;
}

.main-five-card {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-bottom: 7px;
}

.main-five-card a {
  border: solid .1px var(--color-text);
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-five-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-five-card h4 {
  margin: 0 5px 0 10px;
}

.main-five-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.main-six {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 20px 0 0 0;
  color: var(--color-text);
  overflow-x: auto;
}

.main-six .icon{
  font-size: 1.2em;
  color: var(--color-text);
}

.main-six-card h4 {
  margin-left: 30px;
}

.main-six h5 {
  margin-left: 10px;
}

.main-six h5 {
  margin: 10px;
}

.main-six-card {
  height: 440px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}

.main-six-card a {
  border: solid .1px var(--color-text);
  margin: 0px 5px 20px 10px;
  width: 500px;
  border-radius: 3% 3% 3% 3%;
}

.main-six-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-six-card h4 {
  margin: 0 5px 0 10px;
}

.main-six-card p {
  margin: 0 0 10px 10px;
  font-size: .8em;
}

.main-seven {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: -10px 0 0 0;
  color: var(--color-text);
  box-shadow: 0px 10px 10px#bbb;
  overflow-x: auto;
}

.main-seven .icon{
  font-size: 1.2em;
  color: var(--color-text);
}

.main-seven h5 {
  margin-left: 10px;
}

.main-seven-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;

}

.main-seven-card a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto 20px auto;
  width: 60%;
}

.main-seven-card span {
  position: relative;
  top: -6px;
  left: -14px;
}

.main-seven-card h4 {
  margin: 0 5px 0 10px;
}

.main-seven-card p {
  margin: 0 0 0 10px;
  font-size: .8em;
}

.mini-profile {
  height: 25px;
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}

.dateYear {
  color: #ccc;
  cursor: pointer;
}

.dateYearHover {
  color: var(--color-text);
}

@media only screen and (max-width: 369px) {}
</style>
