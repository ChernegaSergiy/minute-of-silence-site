<script>
  import { t } from '../i18n/index.js';

  const presets = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
    { num: 10 },
  ];
</script>

<section id="presets" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">{$t.presets.eyebrow}</div>
      <h2 class="section__title section__title--compact">{$t.presets.title}</h2>
      <p class="section__description">{$t.presets.description}</p>
    </header>

    <div class="grid grid-4 gap-4">
      {#each presets as preset, i}
        <div class="card">
          <div class="flex items-center gap-2 mb-2"><span class="badge">{preset.num}</span></div>
          <div class="card__title">{$t.presets.list[i].title}</div>
          <div class="card__subtitle">{$t.presets.list[i].subtitle}</div>
          <div class="card__content">{$t.presets.list[i].content}</div>
        </div>
      {/each}
    </div>
  </div>
</section>