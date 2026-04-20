<script>
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import About from './lib/components/About.svelte';
  import Features from './lib/components/Features.svelte';
  import Presets from './lib/components/Presets.svelte';
  import Origin from './lib/components/Origin.svelte';
  import Download from './lib/components/Download.svelte';
  import Faq from './lib/components/Faq.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="page">
  <div class="top-strip">
    <div class="top-strip__emergency">🇺🇦 Хвилина мовчання</div>
    <div class="flex items-center gap-2">
      <span class="badge">Windows 10/11</span>
      <span class="badge">Linux</span>
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