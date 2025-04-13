<template>
  <main class="h-full w-full flex flex-col gap-10 items-center justify-center">
    <h1
      class="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text"
    >
      Área administrativa
    </h1>
    <section class="w-250 flex flex-col gap-4 justify-center items-center">
      <h2 class="text-3xl font-bold">Vencedor</h2>
      <p>Id: {{ winner.winnerId }}</p>
      <p>Número da sorte: {{ winner.luckNumber }}</p>
      <p>Nome: {{ winner.username }}</p>
    </section>
    <Button label="Sortear vencedor" @click="pickWinner" />
  </main>
</template>

<script setup>
import { drawService } from '@/services'
import { Button, useToast } from 'primevue'
import { ref } from 'vue'

const winner = ref({})

const toast = useToast()

const pickWinner = async () => {
  try {
    const response = await drawService()
    winner.value = response
  } catch {
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Ocorreu um erro ao sortear o vencedor. Tente novamente',
      life: 3000
    })
  }
}
</script>
