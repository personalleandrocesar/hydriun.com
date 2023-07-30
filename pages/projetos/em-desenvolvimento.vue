
<template>
  <div class='anima'>

    <div class='main-two'>
      <div>
        <h5><i class="fa-solid fa-layer-group"></i> Projetos em Desenvolvimento</h5>
      </div>
    </div>

    <div class='main-tree'>




                  <a href="https://triboalmaforte.com" class='main-five-card tribo'>

                    <div>
                      <img src='/img/tribo.jpg' alt='' class='mini-profile'>
                    </div>
                    <div>
                      <h4>Tribo Alma forte</h4>
                      <h5>@triboalmaforte</h5>
                      <p>O corpo só é forte porque a alma é forte!</p>
                    </div>
                  </a>

    </div>
  </div>
</template>
<style scoped>
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

.main {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: var(--color-text);
}

.main-two {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: -10px 0 -20px 0;
  overflow-x: auto;
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
  margin: 0px 0 0 0;
  flex-wrap: wrap;
  background-color: var(--color-background);
  overflow-x: auto;
}

.main-tree img {
  height: 70px;
  border-radius: 50%;
}

.main-tree i {
  font-size: 1em;
}


.main-tree h4 {
  margin: 10px 10px 0 10px;
  transition: all .4s linear;
  text-align: center;
  line-height: normal;
}

.main-tree h5:nth-child(1) {
  margin: 0px auto 5px auto;

}

.main-tree h5 {
  margin: 0px 10px 0px 10px;
  color: #53dd8393;
  font-size: .8em;
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
.main-tree .tribo:hover {
  box-shadow: 0 5px 5px #c07b4f;
}

.tribo:hover h4 {
  text-shadow: 0 1px 1px #c07b4f;
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
  border-radius: 50%;
  margin: 10px 0 0 10px;
  padding: 0 15px 0 0;
}


@media only screen and (max-width: 382px) {
  .main-tree-card {
    width: 90%;
  }
}
</style>
