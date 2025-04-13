<template>
  <main
    class="h-full w-full flex flex-col gap-10 items-center justify-center bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950"
  >
    <h1
      class="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text"
    >
      Chama!!
    </h1>
    <p class="text-gray-300">{{ message }}</p>
    <img class="w-50 h-50 rounded-4xl" src="@/assets/img/deu-green.jpg" />
    <p class="text-gray-300">Aparentemente você fecha com a Tropa do Tigrinho!</p>
    <Button label="Me tire daqui" @click="handleClick" />
  </main>
</template>

<script setup>
import router from '@/router'
import { Button } from 'primevue'
import { computed } from 'vue'

const message = computed(() => {
  const user = window.sessionStorage.getItem('chatUser')
  const { username } = JSON.parse(atob(user))

  return `O tigrinho soltou a cartinha, ${username} e seu nome tava nela!! 🔥🐅🔥`
})

const handleClick = () => {
  window.sessionStorage.clear()
  router.push({ name: 'home' })
}
</script>
