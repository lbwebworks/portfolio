import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'

// Restore deep-link paths redirected through GitHub Pages 404 fallback
// before Vue Router reads the initial location.
if (window.location.search.startsWith('?/')) {
  const decoded = window.location.search
    .slice(1)
    .split('&')
    .map((segment) => segment.replace(/~and~/g, '&'))
    .join('?')
  const target = `${window.location.pathname.slice(0, -1)}${decoded}${window.location.hash}`
  window.history.replaceState(null, '', target)
}

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'ProjectDetail', component: ProjectDetail },
  { path: '/services', name: 'Services', component: Services }
  ,{ path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
