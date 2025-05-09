<template>
  <main class="h-full w-full flex flex-col gap-10 items-center justify-center">
    <h1
      class="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text"
    >
      404
    </h1>
    <p class="text-gray-300">Página não encontrada</p>
    <Button label="Voltar" @click="handleClick" />
  </main>
</template>

<script setup>
import router from '@/router'
import { Button } from 'primevue'

const handleClick = () => {
  router.push({ name: 'chat' })
}
</script>
