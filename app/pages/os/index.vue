<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import Dexie from 'dexie';
// Head
useHead({ titleTemplate: 'Hydriun Os' });

// Relógio
const localTime = ref(new Date().toLocaleTimeString());
const date = ref(
  new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short'
  })
)
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    localTime.value = new Date().toLocaleTimeString();
  }, 1000);

  const savedUser = localStorage.getItem("hydriunUser");
  if (savedUser) {
    username.value = savedUser;
    isLoggedIn.value = true;
    loadSpaces();
  }

  if (!welcomeVisible.value && username.value.trim()) {
    welcomeVisible.value = true;
    setTimeout(() => {
      moved.value = true;
      movedT.value = true;
    }, 3000);
    setTimeout(() => {
      timeline.value = true;
      newCard.value = true;
    }, 3500);
  }
});
onBeforeUnmount(() => clearInterval(interval));

// Banco de dados
const db = new Dexie("NotesDB");
db.version(2).stores({
  users: "username, password", // nova tabela
  spaces: "++id, username, name",
  flows: "++id, username, spaceId, name",
  notes: "++id, username, flowId, text"
});

// Login
const loading = ref(true); // novo
const loginUsername = ref("");
const loginPassword = ref("");
const isLoggedIn = ref(false);
const loginError = ref("");
const registerBtn = ref(false);

const username = ref("");
const login = async () => {
  const user = await db.users.get(loginUsername.value);
  if (user && user.password === loginPassword.value) {
    username.value = loginUsername.value;
    isLoggedIn.value = true;
    localStorage.setItem("hydriunUser", username.value);
    await loadSpaces();
  } else {
    registerBtn.value = true
    loginError.value = "Usuário ou senha incorretos";
    setTimeout(() => {
      loginError.value = '';
    },5000)
  }

  if (!welcomeVisible.value && username.value.trim()) {
    welcomeVisible.value = true;
    setTimeout(() => {
      moved.value = true;
      movedT.value = true;
    }, 3000);
    setTimeout(() => {
      timeline.value = true;
      newCard.value = true;
    }, 3500);
  }
  
  markAnimated(); // ← Aqui!
};
const register = async () => {
  const existing = await db.users.get(loginUsername.value);
  if (existing) {
    loginError.value = "Usuário já existe";
    setTimeout(() => {
      loginError.value = '';
    },5000)
    return;
  }
  await db.users.add({
    username: loginUsername.value,
    password: loginPassword.value
  });
  await login();
};

// Sistema Hydriun OS
const welcomeVisible = ref(false);
const moved = ref(false);
const movedT = ref(false);
const timeline = ref(false);
const desire = ref("");
const nameFlow = ref("");
const notes = ref([]);
const newNote = ref("");
const flow = ref(false);
const flowT = ref(true);
const newCard = ref(false);
const nameSpace = ref("");
const spaces = ref([]);
const flows = ref([]);
const activeSpaceId = ref(null);
const activeFlowId = ref(null);
const hasAnimated = ref(false)

onMounted(() => {
  hasAnimated.value = localStorage.getItem('hydriunHasAnimated') === 'true'
})

const timelineClicked = ref(false);
const navClicked = ref(false);

const logout = () => {
  isLoggedIn.value = false;
  username.value = "";
  localStorage.removeItem("hydriunUser");
  welcomeVisible.value = false;
  moved.value = false;
  loginUsername.value = '';
  loginPassword.value = '';
  registerBtn.value = false;
  moved.value = false;
  movedT.value = false;
  timeline.value = false;
  newCard.value = false;
};


// Loaders
const loadSpaces = async () => {
  if (username.value.trim()) {
    spaces.value = await db.spaces.where("username").equals(username.value).toArray();
  }
};
const loadFlows = async () => {
  if (activeSpaceId.value !== null) {
    flows.value = await db.flows.where("spaceId").equals(activeSpaceId.value).toArray();
    if (flows.value.length > 0) {
      activeFlowId.value = flows.value[0].id;
      nameFlow.value = flows.value[0].name;
      await loadNotes();
    }
  }
};
const loadNotes = async () => {
  if (activeFlowId.value !== null) {
    notes.value = await db.notes.where("flowId").equals(activeFlowId.value).toArray();
  }
};

// Criar/Deletar
const newSpace = async () => {
  if (!username.value.trim()) return;

  const spaceName = `Space ${spaces.value.length + 1}`;
  const id = await db.spaces.add({ username: username.value, name: spaceName });

  spaces.value.push({ id, username: username.value, name: spaceName });
  activeSpaceId.value = id;
  nameSpace.value = spaceName;
  timelineClicked.value = true;
  navClicked.value = true;
  timeline.value = false;
  movedT.value = false;
  newCard.value = false;
  flowT.value = false;

  await newFlow(id);
  await loadFlows();
};
const deleteSpace = async (spaceId) => {
  const relatedFlows = await db.flows.where("spaceId").equals(spaceId).toArray();
  for (const flow of relatedFlows) {
    await db.notes.where("flowId").equals(flow.id).delete();
    await db.flows.delete(flow.id);
  }
  await db.spaces.delete(spaceId);
  spaces.value = spaces.value.filter(space => space.id !== spaceId);

  if (activeSpaceId.value === spaceId) {
    activeSpaceId.value = null;
    flows.value = [];
    notes.value = [];
  }
};

const newFlow = async (spaceId) => {
  if (!username.value.trim() || spaceId === null) return;

  const flowCount = await db.flows.where("spaceId").equals(spaceId).count();
  const flowName = `Flow ${flowCount + 1}`;
  const id = await db.flows.add({ username: username.value, spaceId, name: flowName });

  flows.value.push({ id, username: username.value, spaceId, name: flowName });
  activeFlowId.value = id;
  nameFlow.value = flowName;
  await loadNotes();
};

const selectSpace = async (space) => {
  activeSpaceId.value = space.id;
  nameSpace.value = space.name;
  newCard.value = false;
  movedT.value = false;
  flowT.value = false;
  timelineClicked.value = true;

  await loadFlows();
};

const nullSpace = async (space) => {
  activeSpaceId.value = '';
  nameSpace.value = '';
  await loadFlows();
  newCard.value = true;
  timeline.value = true;
  flowT.value = true;
}

const selectFlow = async (flow) => {
  activeFlowId.value = flow.id;
  nameFlow.value = flow.name;
  await loadNotes();
};
const addNote = async () => {
  if (!newNote.value.trim() || activeFlowId.value === null) return;
  await db.notes.add({ username: username.value, text: newNote.value, flowId: activeFlowId.value });
  newNote.value = "";
  await loadNotes();
};
const deleteNote = async (id) => {
  await db.notes.delete(id);
  await loadNotes();
};

// Exibição
const activateTimeline = () => {
  timelineClicked.value = true;
  navClicked.value = true;
  timeline.value = false;
  movedT.value = false;
};

const showMessage = () => {
  if (!welcomeVisible.value && loginUsername.value.trim()) {
    welcomeVisible.value = true;
    setTimeout(() => {
      moved.value = true;
      movedT.value = true;
    }, 3000);
    setTimeout(() => {
      timeline.value = true;
      newCard.value = true;
    }, 3500);
  }
};
function timeLine () {
  welcomeVisible.value = false;
  setTimeout(() => {
    timeline.value = false;
  }, 3500);
}
const getGreetingMessage = () => {
  const now = new Date();
  const hour = now.getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
};
const greetingMessage = computed(() => getGreetingMessage());

// Reação ao username
watch(username, loadSpaces);
</script>


<template>
    <!-- TELA DE LOGIN -->
  <div v-if="!isLoggedIn" class="login-box">

    <div class="nav" :class="{ showNav: navClicked }">

      <nav>
        <NuxtLink class="login">{{ localTime }}</NuxtLink>
      </nav>

    </div>

    <header>

      <div class="logo" v-if="!welcomeVisible">
          
        <h1 v-if="!moved">Hydriun - Os</h1>
        
        <div v-if="!isLoggedIn && !moved" class="login-box">
          <input class="arrow" v-model="loginUsername" placeholder="Usuário" /><br>
          <input v-if="!moved" @keyup.enter="login" class="arrow" v-model="loginPassword" type="password" placeholder="Senha" />
        </div>
        
        <p style="color:red; margin: -40px 0 40px 0">{{ loginError }}</p>
        <button v-if='registerBtn' class="btn-register" @click="register">Clique aqui, para Cadastrar</button>
      </div>

    </header>

</div>  
<!-- FIM DA TELA DE LOGIN-->

<!-- SISTEMA APÓS LOGIN -->
<div v-if="isLoggedIn">
  <div class="nav" :class="{ showNav: navClicked }">
    <nav>
      <NuxtLink class="login">{{ date }}  {{ localTime }}</NuxtLink>
    </nav>
    <span class='logout'></span>
      <svg @click='logout' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 8V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2"/><path d="M15 12H3l3-3m0 6l-3-3"/></g></svg>
  </div>

  
    <transition name="fade">
      <div v-if="welcomeVisible" class="welcome-message" :class="{ moveUp: moved }">
        <p v-if="!moved">{{ greetingMessage }}, {{ username }}!</p>

        <p class="blue" v-if="movedT">{{ greetingMessage }}, {{ username }}!</p>
        <p v-if="moved" :class="{ 'desire-top': timelineClicked }">
          <input
            v-if="flowT"
            type="text"
            class="desire"
            placeholder="O que você deseja fazer?"
            v-model="desire"
          />
          <h2 v-else class="namespace">{{ nameSpace }}</h2>
        </p>
        <div v-if="newCard" class='spaces'>
          <div class="card" @click="newSpace">+ Criar Space</div>
        </div>
        <br>

        <h2 v-if="newCard">Spaces</h2>
        <div v-if="newCard" class="spaces intern">
          <div class="card" v-for="space in spaces" :key="space.id" @click="selectSpace(space)">
            {{ space.name }}
            <button class="button" @click.stop="deleteSpace(space.id)">x</button>
          </div>
          <transition name="fadetwo">
            <p v-if="timeline" @click="activateTimeline" class="fixed">
              <Icon name="ic:sharp-arrow-downward" /> Linha do tempo
            </p>
          </transition>
        </div>
        
        <!-- Dentro do Space recém criado-->
        <div v-if="activeSpaceId">
          <transition name="fadetwo">
          <p class="fixed" @click='nullSpace'>
            <Icon name="ic:sharp-arrow-back" /> Voltar para Spaces
          </p>
        </transition> 


        <!-- Área interna do Flow-->
        <div class="flow-div">   

          <div>

            
          <div class="card-flow-new" @click="newFlow(activeSpaceId)">+ Criar Flow</div>
          <h2 v-if="flowT" class="namespace" :class="{ 'desire-top': timelineClicked }">{{ nameSpace }}</h2>
            <div class="card-flow" v-for="flow in flows" :key="flow.id" @click="selectFlow(flow)">
              {{ flow.name }}
            </div>
          </div>

          <div class="notes" v-if="activeFlowId">
            <h2>Notas de {{ nameFlow }}</h2>
            <textarea type="text" v-model="newNote" placeholder="Digite uma nota..." @keyup.ctrl.enter="addNote" />
            <ul>
              <li v-for="note in notes" :key="note.id">
                <button @click="deleteNote(note.id)">Excluir</button>
              </li>
            </ul>

          </div>
        </div>
      </div>

      </div>
    </transition>
  </div>
</template>

<style scoped>
.body {
  overflow-x: auto;
  width: 100px;
}

.spaces {
  display: flex;
  gap: 10px;
  flex-wrap:wrap;
}

.intern {
  width: 100%;
  overflow-x: auto;
margin-bottom: 80px;
}


.showNav {
  background: linear-gradient(to bottom right, #20a9b210 0%,#20a9b210 50%,#20a9b230 100%);
  color: white;
  padding: 10px 0;
}

.desire {
  transition: all 0.5s ease-in-out;
}

.desire-top {
  position: absolute;
  top: 0px;
  left: 0%;
  font-size: 1.2rem;
  font-weight: bold;
  transform: translateY(-40px);
  animation: clicktop .5s linear;
  width: 170px;
}

@keyframes clicktop {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-40px);
      }
    }



  .nav {
    font-family: 'naston-regular';
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 15px 0 ;
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    top: 0px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: background 0.3s ease-in-out;
    /* background: linear-gradient(to bottom right, #20a9b210 0%,#20a9b210 50%,#20a9b230 100%); */
  }

  /* .nav.moveUp {
      
    background: linear-gradient(to bottom right, #20a9b210 0%,#20a9b210 50%,#20a9b230 100%);
  } */

  nav a {
    color: #20a9b2;
    font-weight: bold;
    font-size: .9rem;
    margin-right: .5rem;
  }
  nav a:hover {
    color: #20a9b2;
  }

  nav a.router-link-exact-active {
    color: var(--color-detail);
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    margin-top: 5px;
  }

  nav a:first-of-type {
    border: 0;
  }
  
  svg{
      font-family: 'naston-regular';
      zoom: .8;
      text-align: center;
      display: flex;
      position: fixed;
      top: 20px;
      right: 2%;
      z-index: 2;
      transition: all 0.4s linear;
  }
  
  .icon {
      zoom: .5;
      color: #999;
  }
  
  .logout:hover {
    color: #20a9b2;
  }
  
  container {
    max-width: 400px;
    margin: auto;
    text-align: center;
  }
  input {
    width: 80%;
    padding: 5px;
  }
  button-square{
    margin-left: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }
  .welcome-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    border-radius: 10px;
    text-align: center;
    transition: all 0.5s ease-in-out;
    z-index: 100;
    color: var(--color-detail);
    font-size: 3.5rem;
  }
  h2 {
    text-align: left;
  }

  .welcome-message .gray {
    color: var(--color-text);
      font-size: 2rem;
  }
  .welcome-message .blue {
      color: var(--color-detail);
      font-size: 2rem;
  }

  .welcome-message.moveUp {
    color: var(--color-text);
    top: 50px;
    left: 0px;
    transform: none;
    background: transparent;
    box-shadow: none;
    font-size: 14px;
  }

  .card {
    height: 150px;
    width: 210px;
    border-radius: 20px;
    background: #20a9b220;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
    margin-top: 15px;
  }

  .card:hover {
    background: #20a9b280;
    cursor:pointer;
    color: #333;
  }

  .card-flow-new {
    height: 40px;
    padding-top: 4px;
    width: 200px;
    border-radius: 10px;
    background: #20a9b280;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  .card-flow-new:hover {
    background: #20a9b2;
    cursor:pointer;
    color: #333;
  }

  .card-flow {
    height: 40px;
    padding-top: 4px;
    width: 200px;
    margin-top: 15px;
    border-radius: 10px;
    background: #20a9b210;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  .card-flow:hover{
    background: #20a9b230;
    cursor:pointer;
    color: #333;
  }

  .flow-div {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 5fr;
  }


  .button{
        display: block;
    /* margin: 10px 0; */
    /* padding: 8px; */
    background-color: #aaa;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    top: -85px;
    right: -95px;
  }
  
  .button:hover{
    background-color: #ff1900;
    transition: all 0.4s linear;
  }

  .btn-register {
        display: block;
    /* margin: 10px 0; */
    /* padding: 8px; */
    color: #20a9b2;
    text-transform: uppercase;
    font-weight: bolder;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    opacity:.8;
  }

  .btn-register:hover {
    opacity:1;
  }

  .btn {
    height: 45px;
    width: 200px;
    border-radius: 12px;
    background: #20a9b220;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn-plus {
    height: 45px;
    width: 200px;
    border-radius: 12px;
    background: #20a9b220;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-square-plus{
    position: absolute;
  top: 100px;
  left: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  transform: translateY(-40px);
  animation: clicktop .5s linear;
  }

  .button-square{
    position: absolute;
  top: 155px;
  left: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  transform: translateY(-40px);
  animation: clicktop .5s linear;
  }

  

  .fixed {
      position: fixed;
      Bottom: 30px;
      backdrop-filter: blur(10px);
    z-index: 200;
    cursor: pointer;
    padding: 3px 25px;
    background: linear-gradient(to bottom right, #20a9b210 0%,#20a9b210 50%,#20a9b230 100%);
    border-radius: 15px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fadetwo-enter-active, .fadetwo-leave-active {
    transition: opacity 0.5s;
  }

  .fadetwo-enter-from, .fadetwo-leave-to {
    opacity: 0;
  }

  @keyframes clickAnimation {
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

  .animate {
    animation: clickAnimation 3s ease infinite;
  }

  .logo{
  margin: 0 auto 80px auto;
    height: 90vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Nirequa';
    color: var(--color-text);
  }

  .ani {
      
  animation: updown 3s ease infinite;
  }

  .arrow {
    margin-top: auto;
  margin-bottom: 64px;
  height: 60px;
  width: 300px;
  zoom: 0.7;
  color: var(--color-detail);
  border: none;
  background: transparent;
  border-bottom: solid 1px var(--color-detail);
  font-size: 2rem;
  }

    .namespace {
  margin-bottom: 34px;
  margin-top: 5px;
  height: 60px;
  width: auto;
  zoom: 0.7;
  color: var(--color-text);
  border: none;
  background: transparent;
  font-size: 2rem;
  position: relative;
  z-index:2002;
  top:0;
  }

  .desire {
  margin-bottom: 34px;
  margin-top: 0px;
  height: 60px;
  width: auto;
  zoom: 0.7;
  color: var(--color-text);
  border: none;
  background: transparent;
  font-size: 2rem;
  position: relative;
  z-index:2002;
  top:0;
  }

  .desire input::placeholder {
  color: var(--color-text);
      
  }

  input:focus {
    outline: none;
  }
  .logo input{
  color: var(--color-detail);
  }
  .logo input::placeholder {
  color: var(--color-detail);
  }


  h1{
    margin-top: auto;
  padding: 0 48px;
      font-size: 3rem;
      margin: 0 auto;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
        color: var(--color-detail);
  }
  @media(max-width: 410px) {
    h1{
      font-size:1.4rem;
    }
    .arrow {
      font-size: 1.1rem;
      width: 250px;
    }
  }

  h3{
    color: var(--color-text);
    margin-top: -1rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
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
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
    color: var(--color-detail);
  }
  </style>
