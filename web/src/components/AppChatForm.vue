<template>
  <footer class="w-full">
    <Form :initialValues :resolver @submit="onFormSubmit" class="flex gap-4 w-full">
      <InputText
        name="message"
        type="text"
        placeholder="Digite sua mensagem"
        fluid
        autocomplete="off"
      />
      <Button type="submit" label="Enviar" />
    </Form>
  </footer>
</template>

<script setup>
import { Form } from '@primevue/forms'
import { Button, InputText } from 'primevue'
import { reactive } from 'vue'

const emit = defineEmits(['onMessage'])
const props = defineProps(['currentUser'])

const initialValues = reactive({
  message: ''
})

const resolver = ({ values }) => {
  const errors = {}

  if (!values.message) {
    errors.message = [{ message: '' }]
  }

  return {
    values,
    errors
  }
}

const onFormSubmit = ({ valid, values, reset }) => {
  if (valid) {
    emit('onMessage', {
      username: props.currentUser.username,
      id: props.currentUser.id,
      message: values.message
    })
    reset()
  }
}
</script>
