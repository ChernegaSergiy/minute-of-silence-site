import { writable } from 'svelte/store';
import en from './en.json';
import uk from './uk.json';

const translations = { en, uk };

function createI18n() {
  const { subscribe, set } = writable(en);

  return {
    subscribe,
    init: () => {
      const path = window.location.pathname;
      const lang = path.startsWith('/uk/') ? 'uk' : 'en';
      set(translations[lang]);
    }
  };
}

export const t = createI18n();
