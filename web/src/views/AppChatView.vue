<template>
  <section class="h-full w-full sm:flex hidden gap-4" v-if="currentUser">
    <AppChat :messages="messages" @on-message="sendMessage" :currentUser="currentUser" />
    <AppList :users="users" @feeling-lucky="feelingLucky($event)" :currentUser="currentUser" />
    <AppDraw
      v-model:visible="drawVisible"
      :numbers="luckNumbers"
      :currentUser="currentUser"
      @onPickNumber="pickLuckNumber"
    />
  </section>
  <AppResult v-model:visible="drawResult.visible" :result="drawResult.result" />
  <section class="h-full w-full sm:hidden flex items-center justify-center">
    <h2 class="text-2xl font-bold text-emerald-600 text-center">
      Não otimizado para telas pequenas
    </h2>
  </section>
</template>

<script setup>
import AppChat from '@/components/chat/AppChat.vue'
import AppDraw from '@/components/chat/AppDraw.vue'
import AppList from '@/components/chat/AppList.vue'
import AppResult from '@/components/result/AppResult.vue'
import { chatService } from '@/services'
import { onMounted, ref } from 'vue'

let wsConnection
const currentUser = ref(null)
const users = ref([])
const messages = ref([])
const luckNumbers = ref({})
const drawVisible = ref(false)
const drawResult = ref({
  visible: false,
  result: null
})

onMounted(() => {
  wsConnection = new WebSocket(`${import.meta.env.VITE_WS_URL}/ws`)

  initConn()
})

const initConn = () => {
  const hash = window.sessionStorage.getItem('chatUser')
  const { id, username } = JSON.parse(atob(hash))

  wsConnection.onopen = async () => {
    console.log('Connected to ws server')
    currentUser.value = { id, username }

    const greeted = window.sessionStorage.getItem('users')
    if (!greeted) {
      try {
        sendMessage({
          username,
          id,
          message: `${username} entrou no chat.`,
          status: 'welcome'
        })

        talkToGemini(`Dê boas vindas a "${username}". Avise "@${username}" que há um easter egg.`)
      } catch {
        return
      }
    } else {
      users.value = JSON.parse(greeted)
    }
  }

  wsConnection.onmessage = handleMessages
}

const talkToGemini = async (prompt) => {
  try {
    const { message } = await chatService(prompt)

    sendMessage({
      username: 'Gemini',
      id: 'gemini',
      message
    })
  } catch {
    sendMessage({
      username: 'Gemini',
      id: 'gemini',
      message: `Desculpe, não foi possível processar sua mensagem, ${currentUser.value.username}.`
    })
  }
}

const handleMessages = ({ data }) => {
  const { id, username, message, connectedUsers, numbersList, result, status } = JSON.parse(data)

  if (result) {
    handleResults(data)
    return
  }

  luckNumbers.value = numbersList

  if (connectedUsers) {
    window.sessionStorage.setItem('users', JSON.stringify(connectedUsers))
    users.value = connectedUsers
  }

  const item = users.value.find((user) => user.id === id)
  const color = item ? item.info.color : '#000000'
  messages.value.push({ id, username, message, color, status })
}

const handleResults = (data) => {
  const { result } = JSON.parse(data)

  drawResult.value = {
    visible: true,
    result
  }
}

const sendMessage = (evt) => {
  wsConnection.send(JSON.stringify(evt))

  const message = evt.message

  if (message.toLowerCase().includes('@gemini')) {
    evt.message = evt.message.replace('@gemini', '')

    const prompt = `${evt.username} disse: ${evt.message}`

    talkToGemini(prompt)
  }
}

const feelingLucky = async (prompt) => {
  await talkToGemini(prompt)

  setTimeout(() => {
    drawVisible.value = true
  }, 2000)
}

const pickLuckNumber = async (luckNumber) => {
  await talkToGemini(
    `Diga ao chat que o número da sorte de ${currentUser.value.username} é ${luckNumber}`
  )

  setTimeout(() => {
    drawVisible.value = false
  }, 1000)
}
</script>
