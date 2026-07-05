import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './styles/index.css'

// Restore deep-link paths redirected through GitHub Pages 404 fallback.
if (window.location.search.startsWith('?/')) {
	const decoded = window.location.search
		.slice(1)
		.split('&')
		.map((segment) => segment.replace(/~and~/g, '&'))
		.join('?')
	const target = `${window.location.pathname.slice(0, -1)}${decoded}${window.location.hash}`
	window.history.replaceState(null, '', target)
}

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
