<script>
  import { release } from '../release.js';
  import { t } from '../i18n/index.js';
</script>

<section id="download" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">{$t.download.eyebrow}</div>
      <h2 class="section__title section__title--compact">{$t.download.title}</h2>
      <p class="section__description">{$t.download.description}</p>
    </header>

    <div class="grid md:grid-cols-2 gap-4">
      <div class="panel max-w-2xl">
        <div class="panel__title">{$t.download.panelTitle}</div>
        <div class="panel__content">
          <p><strong>{$t.download.title} {$release?.version ?? '...'}</strong></p>
          <ul class="fact-list">
            <li><span>{$t.download.platform}</span><span class="fact-list__value">{$t.download.platformValue}</span></li>
            <li><span>{$t.download.size}</span><span class="fact-list__value">{$release?.windows.size ?? '...'}</span></li>
            <li><span>{$t.download.license}</span><span class="fact-list__value">{$t.about.factsLicense}</span></li>
            <li><span>{$t.download.language}</span><span class="fact-list__value">{$t.download.languages}</span></li>
          </ul>
          <a href={$release?.htmlUrl ?? 'https://github.com/ChernegaSergiy/minute-of-silence/releases'} class="btn btn--primary mt-4 underline hover:underline-wavy" target="_blank">
            {$t.download.button}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
