<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Dexie from "dexie";

// Criar o banco de dados local
const db = new Dexie("NotesDB");
db.version(1).stores({
  spaces: "++id, username, name",
  flows: "++id, username, spaceId, name",
  notes: "++id, username, flowId, text"
});

const username = ref("");
const welcomeVisible = ref(false);
const nameSpace = ref("");
const nameFlow = ref("");
const spaces = ref([]);
const flows = ref([]);
const notes = ref([]);
const activeSpaceId = ref(null);
const activeFlowId = ref(null);
const newNote = ref("");

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
</script>

<template>
  <div>
    <h1>Hydriun</h1>

    <input type="text" placeholder="Seu nome" v-model="username" @keyup.enter="loadSpaces" />

    <div class="grid-container">
      <!-- Espaços -->
      <div class="spaces">
        <h2>Spaces</h2>
        <button @click="newSpace">+ Criar Space</button>
        <div v-for="space in spaces" :key="space.id" @click="selectSpace(space)">
          {{ space.name }}
        </div>
      </div>

      <!-- Flows dentro do Space selecionado -->
      <div class="flows" v-if="activeSpaceId">
        <h2>Flows de {{ nameSpace }}</h2>
        <button @click="newFlow(activeSpaceId)">+ Criar Flow</button>
        <div v-for="flow in flows" :key="flow.id" @click="selectFlow(flow)">
          {{ flow.name }}
        </div>
      </div>

      <!-- Notas do Flow selecionado -->
      <div class="notes" v-if="activeFlowId">
        <h2>Notas de {{ nameFlow }}</h2>
        <input type="text" v-model="newNote" placeholder="Digite uma nota..." @keyup.enter="addNote" />
        <ul>
          <li v-for="note in notes" :key="note.id">
            {{ note.text }}
            <button @click="deleteNote(note.id)">Excluir</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
button:hover {
  background-color: #0056b3;
}
</style>
