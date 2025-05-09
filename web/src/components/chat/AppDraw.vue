<template>
  <Dialog
    modal
    :closable="userHasNumber"
    header="Escolha seu número da sorte"
    class="w-full max-w-150 h-fit sm:!block !hidden overflow-y-auto"
  >
    <div class="grid grid-cols-10 gap-4">
      <Button
        v-for="(val, key) of numbers"
        :label="key"
        rounded
        :key="key"
        @click="pickLuckNumber(key, currentUser)"
        :class="getBtnProps(val).classes"
        :severity="getBtnProps(val).severity"
        :disabled="getBtnProps(val).disabled || isNumberPicked"
      />
    </div>
  </Dialog>
</template>

<script setup>
import { pickNumberService } from '@/services'
import { Button, Dialog, useToast } from 'primevue'
import { computed, ref } from 'vue'

const props = defineProps(['numbers', 'currentUser'])
const emit = defineEmits(['onPickNumber'])

const getBtnProps = (val) => {
  const custom = {
    free: {
      classes: userHasNumber.value ? '!cursor-not-allowed' : 'cursor-pointer',
      severity: 'primary',
      disabled: userHasNumber.value
    },
    used: {
      classes: '!cursor-not-allowed',
      severity: 'secondary',
      disabled: true
    }
  }

  return !val.id ? custom.free : custom.used
}

const toast = useToast()
const isNumberPicked = ref(false)

const pickLuckNumber = async (luckNumber, currentUser) => {
  isNumberPicked.value = true
  try {
    const { id, username } = currentUser
    await pickNumberService({ number: Number(luckNumber), id, username })

    toast.add({
      severity: 'success',
      summary: 'Boa sorte!',
      detail: `O seu número da sorte é ${luckNumber}`,
      life: 3000
    })

    emit('onPickNumber', luckNumber)
  } catch {
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Ocorreu um erro ao escolher o número da sorte. Tente novamente',
      life: 3000
    })
    isNumberPicked.value = false
  }
}

const userHasNumber = computed(() => {
  if (!props.currentUser || !props.numbers) return false
  return !!Object.values(props.numbers).find((val) => val.id === props.currentUser.id)
})
</script>
