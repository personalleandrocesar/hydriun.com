  <script setup>
  useHead({
      titleTemplate: 'Hydriun Os',
  })

  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Dexie from "dexie";

  const localTime = ref(new Date().toLocaleTimeString());

  let interval = null;

  onMounted(() => {
    interval = setInterval(() => {
      localTime.value = new Date().toLocaleTimeString();
    }, 1000);
  });

  onBeforeUnmount(() => {
    clearInterval(interval);
  });

 // Criar o banco de dados local
const db = new Dexie("NotesDB");
db.version(1).stores({
  spaces: "++id, username, name",
  flows: "++id, username, spaceId, name",
  notes: "++id, username, flowId, text"
});

  const username = ref("");
  const welcomeVisible = ref(false);
  const moved = ref(false);
  const movedT   = ref(false);
  const timeline = ref(false);
  const desire = ref("");
  const nameFlow = ref("");
  const notes = ref([]);
  const newNote = ref("");
  const flow = ref(false)
  const flowT = ref(true)
  const newCard = ref(false)
  const nameSpace = ref("");
  const spaces = ref([]);
  const flows = ref([]);
  const activeSpaceId = ref(null);
  const activeFlowId = ref(null);


// Carregar Spaces
const loadSpaces = async () => {
  if (username.value.trim()) {
    spaces.value = await db.spaces.where("username").equals(username.value).toArray();
  }
};

// Carregar Flows de um Space
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

// Carregar Notas do Flow ativo
const loadNotes = async () => {
  if (activeFlowId.value !== null) {
    notes.value = await db.notes.where("flowId").equals(activeFlowId.value).toArray();
  }
};

// Criar novo Space
const newSpace = async () => {
  if (!username.value.trim()) return;
  
  const spaceName = `Space ${spaces.value.length + 1}`;
  const id = await db.spaces.add({ username: username.value, name: spaceName });

  spaces.value.push({ id, username: username.value, name: spaceName });
  activeSpaceId.value = id;
  nameSpace.value = spaceName;

  await newFlow(id);
  await loadFlows();
};

const deleteSpace = async (spaceId) => {
  // Remover todos os flows relacionados a esse Space
  const relatedFlows = await db.flows.where("spaceId").equals(spaceId).toArray();
  for (const flow of relatedFlows) {
    await db.notes.where("flowId").equals(flow.id).delete(); // Deletar notas dos flows
    await db.flows.delete(flow.id); // Deletar os flows
  }

  // Remover o próprio Space
  await db.spaces.delete(spaceId);
  spaces.value = spaces.value.filter(space => space.id !== spaceId);

  // Resetar seleção se o Space deletado for o ativo
  if (activeSpaceId.value === spaceId) {
    activeSpaceId.value = null;
    flows.value = [];
    notes.value = [];
  }
};


// Criar um Flow dentro de um Space
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


// Selecionar um Space
const selectSpace = async (space) => {
  activeSpaceId.value = space.id;
  nameSpace.value = space.name;
  await loadFlows();
};

// Selecionar um Flow dentro do Space
const selectFlow = async (flow) => {
  activeFlowId.value = flow.id;
  nameFlow.value = flow.name;
  await loadNotes();
};

// Adicionar Nota ao Flow
const addNote = async () => {
  if (!newNote.value.trim() || activeFlowId.value === null) return;

  await db.notes.add({ username: username.value, text: newNote.value, flowId: activeFlowId.value });
  newNote.value = "";
  await loadNotes();
};

// Deletar Nota
const deleteNote = async (id) => {
  await db.notes.delete(id);
  await loadNotes();
};

// Carregar Spaces quando o username mudar
watch(username, loadSpaces);


const timelineClicked = ref(false);
const navClicked = ref(false);

const activateTimeline = () => {
  timelineClicked.value = true;
  navClicked.value = true;
  timeline.value = false;
  movedT.value = false;
};

  const showMessage = () => {
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
  };

  function timeLine () {
    welcomeVisible.value = false;
      setTimeout(() => {
        timeline.value = false;
      }, 3500);
    };

  
  const getGreetingMessage = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return "Bom dia";
    } else if (hour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  const greetingMessage = computed(() => getGreetingMessage());
  </script>

  <template>
  <div class="nav" :class="{ showNav: navClicked }">
    <nav>
      <NuxtLink class="login">{{ localTime }}</NuxtLink>
    </nav>
  </div>

  <header>
    <div class="logo" v-if="!welcomeVisible">
      <h1 v-if="!moved">Hydriun</h1>
      <NuxtLink>
        <input
          v-if="!moved"
          type="text"
          class="arrow"
          placeholder="Qual o seu nome?"
          v-model="username"
          @keyup.enter="showMessage"
        />
      </NuxtLink>
    </div>
  </header>

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
        <input
          v-else
          type="text"
          class="desire"
          v-model="nameFlow"
        />
      </p>
      <p v-if="flowT" :class="{ 'desire-top': timelineClicked }">
      </p>
      <div v-if="newCard" class='spaces'>
        <div class="card" @click="newSpace"><Icon name="ic:twotone-add" /> Criar space</div>
      </div>
      <br>
      <h2 v-if="newCard">Spaces</h2>
      <div v-if="newCard" class='spaces'>
        <div class="spaces">
          <div  class="card" v-for="space in spaces" :key="space.id" @click="selectSpace(space)">
            {{ space.name }}
            <button class="button" @click="deleteSpace(space.id)">x</button>
          </div>
        </div>
      </div>





      <div class="divv">

        <div v-if="flow" class="button-square-plus"><div class="btn"> + flow</div></div>
        <div v-if="flow" class="button-square">
          <div v-for="flow in flows" :key="flow.id" class="btn-plus">
            {{ nameFlow }}
          </div>
        </div>

        
</div>
      <transition name="fadetwo">
        <p v-if="timeline" @click="activateTimeline" class="fixed">
          <Icon name="ic:sharp-arrow-downward" />Linha do tempo
        </p>
      </transition>
    </div>
  </transition>
</template>


<style scoped>
.body {
  overflow-x: auto;
  width: 100px;
}
.spaces {
  display: flex;
  gap: 20px;
}

.spaces:nth-child(2) {
  width: 100%;
    overflow-x: auto;
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
    font-family: 'Nirequa';
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 15px 0 ;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 2;
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
    width: 200px;
    border-radius: 20px;
    background: #20a9b220;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    background: #20a9b280;
  }

  .button{
        display: block;
    /* margin: 10px 0; */
    /* padding: 8px; */
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    position: relative;
    top: -85px;
    right: -95px;
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

  .icon {
      zoom: .4;
  }

  .fixed {
      position: fixed;
      Bottom: 30px;
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

  .desire {
  margin-bottom: 34px;
  height: 60px;
  width: auto;
  zoom: 0.7;
  color: var(--color-text);
  border: none;
  background: transparent;
  font-size: 2rem;
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