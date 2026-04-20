<script>
  const presets = [
    { num: 1, title: 'Голос + метроном', subtitle: 'Оголошення з метрономом', content: 'Класичний варіант з голосовим оголошенням та метрономом' },
    { num: 2, title: 'Метроном', subtitle: 'Тільки метроном', content: 'Метроном без голосу' },
    { num: 3, title: 'Голос + тиша + дзвін', subtitle: 'Оголошення, 60с тиші, дзвін', content: 'Традиційний варіант зі звуком дзвону наприкінці' },
    { num: 4, title: 'Голос + тиша', subtitle: 'Оголошення, 60с тиші', content: 'Простий варіант з голосовим оголошенням' },
    { num: 5, title: 'Голос + метроном + гімн', subtitle: 'Оголошення, метроном, гімн', content: 'Повний варіант з національним гімном' },
    { num: 6, title: 'Метроном + гімн', subtitle: 'Метроном, потім гімн', content: 'Метроном і гімн без голосу' },
    { num: 7, title: 'Дзвін + тиша + дзвін', subtitle: 'Дзвін, 60с тиші, дзвін', content: 'Класичний варіант зі звуком дзвону' },
    { num: 8, title: 'Дзвін + метроном + дзвін', subtitle: 'Дзвін, метроном, дзвін', content: 'Дзвін на початку та в кінці' },
  ];
</script>

<section id="presets" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">Аудіо</div>
      <h2 class="section__title section__title--compact">8 Пресетів</h2>
      <p class="section__description">
        Обирайте один із 8 варіантів проведення церемонії.
      </p>
    </header>

    <div class="grid grid-4 gap-4">
      {#each presets as preset}
        <div class="card">
          <div class="flex items-center gap-2 mb-2"><span class="badge">{preset.num}</span></div>
          <div class="card__title">{preset.title}</div>
          <div class="card__subtitle">{preset.subtitle}</div>
          <div class="card__content">{preset.content}</div>
        </div>
      {/each}
    </div>
  </div>
</section>