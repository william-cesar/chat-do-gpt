<template>
  <section class="h-full w-fit mx-auto flex flex-col gap-10 items-center justify-center">
    <h1
      class="text-5xl font-bold bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 text-transparent bg-clip-text"
    >
      Chat do GPT
    </h1>
    <p class="text-gray-400">Crie um novo usuário e comece a conversar</p>
    <div class="w-full flex justify-center">
      <Form
        v-slot="$form"
        :initialValues
        :resolver
        @submit="onFormSubmit"
        class="flex flex-col gap-4 w-full"
      >
        <div class="w-full flex flex-col gap-1">
          <IftaLabel>
            <InputText name="username" type="text" fluid />
            <label for="username">Nome de usuário</label>
          </IftaLabel>
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
            $form.username.error?.message
          }}</Message>
        </div>
        <Button type="submit" label="Criar usuário" />
      </Form>
    </div>
  </section>
</template>

<script setup>
import router from '@/router'
import { logInService } from '@/services'
import { Form } from '@primevue/forms'
import { Button, IftaLabel, InputText, Message, useToast } from 'primevue'
import { reactive } from 'vue'

const initialValues = reactive({
  username: ''
})

const resolver = ({ values }) => {
  const errors = {}

  if (values.username.trim().length < 3) {
    errors.username = [{ message: 'O nome de usuário deve ter pelo menos 3 caracteres' }]
  }

  return {
    values,
    errors
  }
}

const toast = useToast()

const onFormSubmit = async ({ valid, values }) => {
  if (valid) {
    try {
      const response = await logInService(values)

      const hash = btoa(JSON.stringify(response))
      window.sessionStorage.setItem('chatUser', hash)

      router.push({ name: 'chat' })
    } catch {
      toast.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Ocorreu um erro ao criar o usuário'
      })
    }
  }
}
</script>
