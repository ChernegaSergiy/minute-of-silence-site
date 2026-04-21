<script>
  import { release } from '../release.js';
  import { t } from '../i18n/index.js';
</script>

<section id="about" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">{$t.about.eyebrow}</div>
      <h2 class="section__title section__title--compact">{$t.about.title}</h2>
      <p class="section__description">{$t.about.description}</p>
    </header>
    <div class="grid grid-2 gap-4">
      <div class="info-block">
        <div class="info-block__title">{$t.about.shortly}</div>
        <div class="info-item">
          <div class="info-item__value">{$t.about.shortlyContent}</div>
        </div>
      </div>
      <div class="info-block">
        <div class="info-block__title">{$t.about.facts}</div>
        <ul class="fact-list">
          <li><span>{$t.about.factsList.version}</span><span class="fact-list__value">{$release?.version ?? '...'}</span></li>
          <li><span>{$t.about.factsList.license}</span><span class="fact-list__value">{$t.about.factsLicense}</span></li>
          <li><span>{$t.about.factsList.language}</span><span class="fact-list__value">{$t.about.factsLanguages}</span></li>
          <li><span>{$t.about.factsList.size}</span><span class="fact-list__value">{$release?.windows.size ?? '...'}</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
