<template>
  <main class="h-screen w-screen p-5">
    <Toast position="bottom-right" :pt-options="{ life: 5000 }" />
    <RouterView />
  </main>
</template>

<script setup>
import { Toast } from 'primevue'
</script>
