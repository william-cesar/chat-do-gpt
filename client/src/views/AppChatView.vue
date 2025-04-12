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
  <section class="h-full w-full sm:hidden flex items-center justify-center">
    <h2 class="text-2xl font-bold text-emerald-600 text-center">
      Não otimizado para telas pequenas
    </h2>
  </section>
</template>

<script setup>
import AppChat from '@/components/AppChat.vue'
import AppDraw from '@/components/AppDraw.vue'
import AppList from '@/components/AppList.vue'
import { chatService } from '@/services'
import { onMounted, ref } from 'vue'

let wsConnection
const currentUser = ref(null)
const users = ref([])
const messages = ref([])
const luckNumbers = ref({})
const drawVisible = ref(false)

onMounted(() => {
  wsConnection = new WebSocket('ws://localhost:8080/ws')

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
        const response = await chatService(
          `Você é o administrador do chat. Seja amigável e positivo. Com uma mensagem curta, dê boas vindas para ${username}.
          Contexto adicional: há ${users.value.length} usuários conectados.`
        )

        sendMessage({
          username: 'Gemini',
          id: 'gemini',
          message: response
        })
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
    const response = await chatService(prompt)

    sendMessage({
      username: 'Gemini',
      id: 'gemini',
      message: response
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
  const { id, username, message, connectedUsers, numbersList } = JSON.parse(data)

  luckNumbers.value = numbersList

  if (connectedUsers) {
    window.sessionStorage.setItem('users', JSON.stringify(connectedUsers))
    users.value = connectedUsers
  }

  const item = users.value.find((user) => user.id === id)
  const color = item ? item.info.color : '#000000'
  messages.value.push({ id, username, message, color })
}

const sendMessage = (evt) => {
  wsConnection.send(JSON.stringify(evt))

  const message = evt.message

  if (message.toLowerCase().includes('@gemini')) {
    evt.message = evt.message.replace('@gemini', '')

    const prompt = `${evt.username} disse: ${evt.message}. Interaja com ${evt.username}.
    Contexto adicional: há ${users.value.length} usuários conectados e ${messages.value.length} mensagens enviadas.`

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
  await talkToGemini(`O número da sorte de ${currentUser.value.username} é ${luckNumber}`)

  setTimeout(() => {
    drawVisible.value = false
  }, 1000)
}
</script>
