<script>
  import { t } from '../i18n/index.js';
</script>

<section id="features" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">{$t.features.eyebrow}</div>
      <h2 class="section__title section__title--compact">{$t.features.title}</h2>
      <p class="section__description">{$t.features.description}</p>
    </header>

    <div class="panel">
      <div class="grid md:grid-cols-2">
        <div class="list-item">
          <div class="list-item__name">{$t.features.auto.name}</div>
          <div class="list-item__meta">{$t.features.auto.meta}</div>
        </div>
        <div class="list-item">
          <div class="list-item__name">{$t.features.media.name}</div>
          <div class="list-item__meta">{$t.features.media.meta}</div>
        </div>
        <div class="list-item">
          <div class="list-item__name">{$t.features.signal.name}</div>
          <div class="list-item__meta">{$t.features.signal.meta}</div>
        </div>
        <div class="list-item">
          <div class="list-item__name">{$t.features.ntp.name}</div>
          <div class="list-item__meta">{$t.features.ntp.meta}</div>
        </div>
        <div class="list-item">
          <div class="list-item__name">{$t.features.skip.name}</div>
          <div class="list-item__meta">{$t.features.skip.meta}</div>
        </div>
        <div class="list-item">
          <div class="list-item__name">{$t.features.volume.name}</div>
          <div class="list-item__meta">{$t.features.volume.meta}</div>
        </div>
      </div>
    </div>
  </div>
</section>