<template>
  <div class='anima'>
    <div class='main'>
        <h5>
            <i class="fa-solid fa-diagram-project"></i> Projetos
        </h5>
    </div>

    <div class='main-two'>
        <h5><NuxtLink to="/projetos/ativos"><i class="fa-solid fa-bars-progress"></i> Projetos Ativos</NuxtLink></h5>
        <h5><NuxtLink to="/projetos/em-desenvolvimento"><i class="fa-solid fa-layer-group"></i> Projetos Em desenvolvimento</NuxtLink></h5>
    </div>

    <NuxtPage/>


  </div>
</template>
<style scoped>
body {
  background: #fff;
  font-family: 'Philosopher', sans-serif;
  color: #aaa;
  line-height: 1.6;
}

iframe {
  margin-left: 10px;
}

i {
  color: var(--color-background);
  font-size: .9em;
  margin: auto;
}

code {
  font-size: 0.6em;
  margin-left: 15px;
  padding-left: 10px;
  border-left: solid 5px #eee;
  color:#888;
}
.main h5 {

  color: var(--color-text);
}

.main {
  display: flex;
  justify-content: flex-start;
  flex-direction: collumn;
  margin: -10px 0 -20px 0;
  color: #555;
  overflow-x:auto;
}

.main i {
  font-size: 1.2em;
  color: var(--color-text);
}

.main h5{
  margin-left: 10px;
}

.main-two {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 0 0 0;
  overflow-x:auto;
}

.main-two i {
  font-size: 1.2em;
  color: #555;
}

.main-two h5{
  margin: 10px;
}

.main-two a {
 border: solid 1px #00bd7e30;
  width: 100px;
  padding: 7px;
border-radius: 3% 3% 3% 3%;
transition: all .4s linear;
}
.main-two i {
  color: #aaa;
  transition: all .4s linear;
}

.main-two a {
  color: var(--color-text);
}
.main-two a.router-link-exact-active {
  color: #00bd7e;
}
.main-two a.router-link-exact-active:hover  {
   background-color: #00bd7e54;
  color: var(--color-text);
}
</style>
