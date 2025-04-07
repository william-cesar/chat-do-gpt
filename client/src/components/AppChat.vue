<template>
  <section class="h-full w-full flex flex-col gap-4 min-w-0">
    <ul
      ref="messagesContainer"
      class="max m-0 list-none rounded shadow shadow-emerald-900 p-4 flex flex-col gap-2 h-full overflow-y-auto"
    >
      <li
        v-for="message in messages"
        :key="message.id"
        :class="message.id === currentUser.id ? 'items-end' : 'items-start'"
        class="p-2 flex flex-col"
      >
        <span
          :style="{ color: message.color }"
          v-if="message.id !== currentUser.id"
          class="font-bold text-sm px-4 py-1 rounded rounded-bl-none z-10 bg-gradient-to-r from-emerald-900 to-emerald-600"
        >
          {{ message.username }}
        </span>
        <p
          :class="message.id !== currentUser.id && 'rounded-tl-none'"
          class="text-sm font-bold bg-gradient-to-r from-gray-100 to-gray-300 p-3.5 mt-[-0.75rem] rounded-2xl text-gray-950 break-words max-w-[80%]"
        >
          {{ message.message }}
        </p>
      </li>
    </ul>
    <AppChatForm @on-message="emit('onMessage', $event)" :currentUser="currentUser" />
  </section>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import AppChatForm from './AppChatForm.vue'

const emit = defineEmits(['onMessage'])

const props = defineProps(['messages', 'currentUser'])

const messagesContainer = ref(null)

watch(
  () => props.messages,
  () => {
    nextTick(() => {
      const bottom = messagesContainer.value.scrollHeight
      messagesContainer.value.scrollTo(0, bottom)
    })
  },
  { deep: true }
)
</script>
