<script>
  import { onMount } from 'svelte';
  import { fetchRelease } from './lib/release.js';
  import { t } from './lib/i18n/index.js';
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import About from './lib/components/About.svelte';
  import Features from './lib/components/Features.svelte';
  import Presets from './lib/components/Presets.svelte';
  import Origin from './lib/components/Origin.svelte';
  import Download from './lib/components/Download.svelte';
  import Faq from './lib/components/Faq.svelte';
  import Footer from './lib/components/Footer.svelte';

  onMount(() => {
    fetchRelease();
    t.init();
  });
</script>

<div class="page">
  <div class="top-strip">
    <div class="top-strip__emergency">🇺🇦 {$t.hero.title}</div>
    <div class="flex items-center gap-2">
      <span class="badge">{$t.download.platformValue.split(', ')[0]}</span>
      <span class="badge">{$t.download.platformValue.split(', ')[1]}</span>
    </div>
  </div>

  <Header />

  <main>
    <Hero />
    <About />
    <Features />
    <Presets />
    <Origin />
    <Download />
    <Faq />
  </main>

  <Footer />
</div>
