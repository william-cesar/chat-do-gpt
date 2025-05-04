<template>
  <Dialog
    class="h-fit w-200"
    modal
    :show-header="false"
    :closable="false"
    :pt="{
      content: {
        style: {
          padding: '0'
        }
      }
    }"
  >
    <component class="rounded-xl p-4" :is="result === 'winner' ? AppWinner : AppGameOver" />
  </Dialog>
</template>

<script setup>
import { Dialog } from 'primevue'
import AppGameOver from './AppGameOver.vue'
import AppWinner from './AppWinner.vue'

defineProps(['result'])
</script>
