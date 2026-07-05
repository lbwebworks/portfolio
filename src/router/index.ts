import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import Services from '../pages/Services.vue'
import Contact from '../pages/Contact.vue'

// Restore deep-link paths redirected through GitHub Pages 404 fallback
// before Vue Router reads the initial location.
{
  const rawSearch = window.location.search
  const decodedSearch = decodeURIComponent(rawSearch)
  if (decodedSearch.startsWith('?/')) {
    const fallbackPayload = decodedSearch.slice(2).replace(/~and~/g, '&')
    const [pathPartRaw, ...queryParts] = fallbackPayload.split('&')
    const pathPart = pathPartRaw.startsWith('/') ? pathPartRaw : `/${pathPartRaw}`
    const restoredQuery = queryParts.length ? `?${queryParts.join('&')}` : ''
    const base = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL.slice(0, -1)
      : import.meta.env.BASE_URL
    const target = `${base}${pathPart}${restoredQuery}${window.location.hash}`
    window.history.replaceState(null, '', target)
  }
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
