<script>
  import { release } from '../release.js';
</script>

<section id="about" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">Про проект</div>
      <h2 class="section__title section__title--compact">Що це таке?</h2>
      <p class="section__description">
        Настільний додаток для Windows та Linux, який автоматично 
        проводить хвилину мовчання о 9:00 щодня.
      </p>
    </header>
    <div class="grid grid-2 gap-4">
      <div class="info-block">
        <div class="info-block__title">Коротко</div>
        <div class="info-item">
          <div class="info-item__value">
            Працює у фоновому режимі, не споживає багато ресурсів. 
            Автоматично запускається з системою. Підтримує NTP-синхронізацію часу.
          </div>
        </div>
      </div>
      <div class="info-block">
        <div class="info-block__title">Факти</div>
        <ul class="fact-list">
          <li><span>Версія</span><span class="fact-list__value">{$release?.version ?? '...'}</span></li>
          <li><span>Ліцензія</span><span class="fact-list__value">CSSM Unlimited v2.0</span></li>
          <li><span>Мова інтерфейсу</span><span class="fact-list__value">Українська, English</span></li>
          <li><span>Розмір</span><span class="fact-list__value">{$release?.windows.size ?? '...'}</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
