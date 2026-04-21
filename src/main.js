import { mount } from 'svelte'
import App from './App.svelte'
import './app.css'

const path = window.location.pathname

if (!path.startsWith('/uk/') && !path.startsWith('/en/')) {
  const browserLang = navigator.language || navigator.userLanguage
  const targetLang = browserLang.startsWith('uk') ? '/uk/' : '/en/'
  window.location.href = targetLang
}

const app = mount(App, {
  target: document.getElementById('app')
})

export default app