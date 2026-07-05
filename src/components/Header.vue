<template>
  <header class="bg-white shadow-sm site-header">
    <div class="max-w-5xl mx-auto p-4 flex items-center justify-between">
      <div class="site-brand">Portfolio</div>
      <div class="flex items-center">
        <nav class="nav-links nav-tabs">
          <router-link to="/">Home</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
        <button @click="toggleTheme" aria-label="Toggle theme" class="nav-theme-toggle p-2 rounded-full" title="Toggle theme">
          <span v-if="theme==='dark'">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref<'light'|'dark'>('light')

function applyTheme(t: 'light'|'dark'){
  theme.value = t
  try{ document.documentElement.setAttribute('data-theme', t) }catch(e){}
  try{ localStorage.setItem('theme', t) }catch(e){}
}

function toggleTheme(){
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(()=>{
  let saved = 'light'
  try{ saved = (localStorage.getItem('theme') as 'light'|'dark') || saved }catch(e){}
  // prefer saved, otherwise check prefers-color-scheme
  if(!saved){
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    saved = prefers ? 'dark' : 'light'
  }
  applyTheme(saved as 'light'|'dark')
})
</script>
