<template>
  <main class="h-full w-full flex flex-col gap-10 items-center justify-center">
    <h1
      class="text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 text-transparent bg-clip-text"
    >
      Área administrativa
    </h1>
    <section class="w-250 flex flex-col gap-4 justify-center items-center">
      <h2 class="text-3xl font-bold">Números selecionados</h2>
      <div class="grid grid-cols-10 gap-4">
        <Button
          v-for="(val, key) of numbers"
          :label="key"
          rounded
          :key="key"
          :severity="val === 'free' ? 'primary' : 'secondary'"
        />
      </div>
    </section>
    <Button label="Sortear vencedor" @click="pickWinner" />
    <Button label="Reiniciar" @click="reset" />
  </main>
</template>

<script setup>
import { drawService, resetService } from '@/services'
import { Button, useToast } from 'primevue'

const toast = useToast()
const numbers = {
  1: 'free',
  2: 'uuid'
}

const pickWinner = async () => {
  try {
    const response = await drawService()
    console.log(response)
  } catch {
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Ocorreu um erro ao sortear o vencedor. Tente novamente',
      life: 3000
    })
  }
}

const reset = async () => {
  try {
    await resetService()
  } catch {
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Ocorreu um erro ao reiniciar. Tente novamente',
      life: 3000
    })
  }
}
</script>
