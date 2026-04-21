import { mount } from 'svelte'
import App from './App.svelte'
import './app.css'

const urlParams = new URLSearchParams(window.location.search)
const langParam = urlParams.get('lang')

if (!langParam) {
  const browserLang = navigator.language || navigator.userLanguage
  const targetLang = browserLang.startsWith('uk') ? 'uk' : 'en'
  window.location.href = `?lang=${targetLang}`
}

const app = mount(App, {
  target: document.getElementById('app')
})

export default app