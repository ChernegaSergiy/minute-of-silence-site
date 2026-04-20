<script>
  const faqs = [
    { q: 'Чи потрібно встановлювати?', a: 'Так, це настільний додаток для Windows/Linux. Встановлюється один раз і автоматично запускається з системою.' },
    { q: 'Споживає багато ресурсів?', a: 'Ні, працює у фоновому режимі. Активується лише на короткий час о 9:00.' },
    { q: 'Чи приходять сповіщення перед церемонією?', a: 'Так, за 5 хвилин до церемонії приходить системне сповіщення з нагадуванням.' },
    { q: 'Можна змінити час?', a: 'Наразі час фіксований — 9:00. Це відповідає традиційному часу проведення хвилини мовчання в Україні.' },
    { q: 'Можна пропустити церемонію?', a: 'Так, через інтерфейс додатку або системний трей.' },
  ];

  let openIndex = $state(null);

  function toggle(index) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section id="faq" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">Підтримка</div>
      <h2 class="section__title section__title--compact">Часті питання</h2>
    </header>

    <div class="accordion-group">
      {#each faqs as faq, index}
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