import Dexie from 'dexie'

export default defineNuxtPlugin(async () => {
  const username = localStorage.getItem('hydriunUser')
  if (!username) return

  // useState globais
  const user = useState('username', () => username)
  const spaces = useState('spaces', () => [])
  const flows = useState('flows', () => [])
  const activeSpaceId = useState('activeSpaceId', () => null)
  const activeFlowId = useState('activeFlowId', () => null)
  const notes = useState('notes', () => [])

  // Cria banco sem tipagem
  const db = new Dexie("NotesDB")

  db.version(2).stores({
    users: "username, password",
    spaces: "++id, username, name",
    flows: "++id, username, spaceId, name",
    notes: "++id, username, flowId, text"
  })

  // Carrega dados do usuário
  const loadedSpaces = await db.spaces.where("username").equals(username).toArray()
  spaces.value = loadedSpaces

  if (loadedSpaces.length > 0) {
    const firstSpace = loadedSpaces[0]
    activeSpaceId.value = firstSpace.id

    const loadedFlows = await db.flows.where("spaceId").equals(firstSpace.id).toArray()
    flows.value = loadedFlows

    if (loadedFlows.length > 0) {
      const firstFlow = loadedFlows[0]
      activeFlowId.value = firstFlow.id

      const loadedNotes = await db.notes.where("flowId").equals(firstFlow.id).toArray()
      notes.value = loadedNotes
    }
  }
})
