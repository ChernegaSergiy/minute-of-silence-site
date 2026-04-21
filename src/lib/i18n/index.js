import { writable } from 'svelte/store';

function createLangStore() {
  const { subscribe, set } = writable('en');

  return {
    subscribe,
    setUk: () => set('uk'),
    setEn: () => set('en')
  };
}

export const lang = createLangStore();
