<template>
  <ul class="m-0 list-none shadow shadow-emerald-900 rounded p-4 flex flex-col gap-2 w-65 min-w-65">
    <li v-for="user in users" :key="user.id" class="p-2 flex items-center justify-content-between">
      <div class="flex flex-1 items-center gap-2 w-full min-w-0">
        <Avatar
          :class="user.info.role === 'admin' ? 'cursor-help' : 'cursor-pointer'"
          :title="user.info.role === 'admin' ? 'Pra que serve esse botão?' : 'Não está aqui'"
          :label="user.info.short"
          size="small"
          @click="feelingLucky(user.info.role)"
          shape="circle"
        />
        <span
          class="font-bold text-sm truncate max-w-[80%]"
          :style="{ color: user.info.color }"
          :title="user.username"
        >
          {{ user.username }}
        </span>
      </div>
      <Tag :value="getRole(user.info.role)" :severity="user.info.badge" />
    </li>
  </ul>
</template>

<script setup>
import router from '@/router'
import { Avatar, Tag } from 'primevue'

const emit = defineEmits(['feeling-lucky'])

const props = defineProps(['users', 'currentUser'])

const feelingLucky = (role) => {
  if (role === 'admin') {
    const prompt = `Há um easter egg no chat e ${props.currentUser.username} encontrou. Informe ao restante do chat que ${props.currentUser.username} foi encontrar a sorte grande. Mantenha o mistério, mas instigue o resto do chat para participar.`

    emit('feeling-lucky', prompt)

    const routeData = router.resolve({ name: 'draw' })
    window.open(routeData.href, '_blank')
  }
}

const getRole = (role) => {
  return role.charAt(0).toUpperCase() + role.slice(1)
}
</script>
