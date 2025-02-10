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
    users: "username",
    notes: "++id, username, text"
  });

  const username = ref("");
  const welcomeVisible = ref(false);
  const moved = ref(false);
  const timeline = ref(false);
  const desire = ref("");
  const notes = ref([]);
  const newNote = ref("");

  // Carregar notas do usuário ao iniciar ou ao mudar o username
  const loadNotes = async () => {
    if (username.value.trim()) {
      notes.value = await db.notes.where("username").equals(username.value).toArray();
    }
  };
const timelineClicked = ref(false);

const activateTimeline = () => {
  timelineClicked.value = true;
  timeline.value = false
};

  onMounted(loadNotes);
  watch(username, loadNotes);

  // Adicionar nova nota para o usuário atual
  const addNote = async () => {
    if (!newNote.value.trim() || !username.value.trim()) return;
    await db.notes.add({ username: username.value, text: newNote.value });
    await loadNotes();
    newNote.value = "";
  };

  // Deletar uma nota
  const deleteNote = async (id) => {
    await db.notes.delete(id);
    await loadNotes();
  };

  const showMessage = () => {
    if (!welcomeVisible.value && username.value.trim()) {
      welcomeVisible.value = true;
      setTimeout(() => {
        moved.value = true;
      }, 3000);
      setTimeout(() => {
        timeline.value = true;
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
  <div class="nav" :class="{ showNav: timelineClicked }">
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
      <p class="gray" v-if="!moved">O que você deseja fazer?</p>

      <p class="blue" v-if="moved">{{ greetingMessage }}, {{ username }}!</p>

      <p v-if="moved" :class="{ 'desire-top': timelineClicked }">
        <input
          type="text"
          class="desire"
          placeholder="O que você deseja fazer?"
          v-model="desire"
        />
      </p>

      <transition name="fadetwo">
        <p v-if="timeline" @click="activateTimeline" class="fixed">
          <Icon name="ic:sharp-arrow-downward" />Linha do tempo
        </p>
      </transition>
    </div>
  </transition>
</template>


<style scoped>

.showNav {
  background: linear-gradient(to bottom right, #20a9b210 0%,#20a9b210 50%,#20a9b230 100%);
  color: white;
  padding: 10px 0;
}

.desire {
  transition: all 0.3s ease-in-out;
}

.desire-top {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: bold;
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
  button {
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