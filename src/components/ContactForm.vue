<template>
  <form @submit.prevent="submit" class="max-w-xl bg-white p-6 rounded shadow">
    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Name</label>
      <input v-model="form.name" required class="w-full border rounded p-2" />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Email</label>
      <input v-model="form.email" type="email" required class="w-full border rounded p-2" />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium mb-1">Message</label>
      <textarea v-model="form.message" rows="6" required class="w-full border rounded p-2"></textarea>
    </div>

    <div class="flex items-center gap-3">
      <button :disabled="loading" class="bg-blue-600 text-white px-4 py-2 rounded">
        <span v-if="!loading">Send</span>
        <span v-else>Sending…</span>
      </button>
      <p v-if="status === 'success'" class="text-green-600">Message sent. Thank you!</p>
      <p v-if="status === 'error'" class="text-red-600">Send failed. Try again later.</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const FORM_ENDPOINT = 'https://formspree.io/f/your-form-id'

const form = reactive({ name: '', email: '', message: '', _gotcha: '' })
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const createdAt = ref(Date.now())

async function submit() {
  // basic spam protections: honeypot and minimum time before submit
  if (form._gotcha && form._gotcha.trim() !== '') {
    // likely bot — silently accept to avoid feedback
    status.value = 'success'
    return
  }
  const now = Date.now()
  if (now - createdAt.value < 1500) {
    // submitted too quickly — likely bot
    status.value = 'success'
    return
  }

  loading.value = true
  status.value = 'idle'
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
    })
    if (res.ok) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    } else {
      status.value = 'error'
    }
  } catch (e) {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}

// reset createdAt when component mounts
onMounted(() => {
  createdAt.value = Date.now()
})
</script>

<style scoped></style>
