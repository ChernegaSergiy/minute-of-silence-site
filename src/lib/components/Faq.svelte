<script>
  import { t } from '../i18n/index.js';

  let openIndex = $state(null);

  function toggle(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">{$t.faq.eyebrow}</div>
      <h2 class="section__title section__title--compact">{$t.faq.title}</h2>
    </header>

    <div class="accordion-group">
      {#each $t.faq.list as faq, index}
        <details class="accordion" open={openIndex === index}>
          <summary class="accordion-trigger" onclick={(e) => { e.preventDefault(); toggle(index); }}>
            {faq.q} <span class="accordion-icon"></span>
          </summary>
          <div class="accordion-content">
            {faq.a}
          </div>
        </details>
      {/each}
    </div>
  </div>
</section>