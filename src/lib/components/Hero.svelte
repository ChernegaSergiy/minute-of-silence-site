<script>
  import { t } from '../i18n/index.js';
</script>

<section class="hero">
  <div class="container">
    <div class="hero-inner">
      <div>
        <div class="hero__kicker">{$t.hero.kicker}</div>
        <h1 class="hero__title">{$t.hero.title}</h1>
        <p class="hero__subtitle">{$t.hero.subtitle}</p>
        <div class="hero__actions">
          <a href="#download" class="btn btn--primary underline hover:underline-wavy">{$t.hero.download}</a>
          <a href="#features" class="btn btn--ghost underline hover:underline-wavy">{$t.hero.features}</a>
        </div>
        <div class="hero__meta">
          <div class="hero__meta-item">
            <span class="hero__meta-label">{$t.hero.activates}</span>
            <span class="hero__meta-value">{$t.hero.activatesValue}</span>
          </div>
          <div class="hero__meta-item">
            <span class="hero__meta-label">{$t.hero.presets}</span>
            <span class="hero__meta-value">{$t.hero.presetsValue}</span>
          </div>
          <div class="hero__meta-item">
            <span class="hero__meta-label">{$t.hero.platform}</span>
            <span class="hero__meta-value">{$t.hero.platformValue}</span>
          </div>
        </div>
      </div>
      <aside class="hero__image">
        <div class="hero__image-label">{$t.hero.imageLabel}</div>
        <img src="/images/screenshot.png" alt={$t.hero.imageAlt} class="w-full" style="max-height: 180px; object-fit: contain;" fetchpriority="high">
        <div class="hero__image-caption">{$t.hero.imageCaption}</div>
      </aside>
    </div>
  </div>
</section>