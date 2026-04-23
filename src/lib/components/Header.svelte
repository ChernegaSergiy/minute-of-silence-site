<script>
  import { t } from '../i18n/index.js';
</script>

<header class="header">
  <div class="header-inner">
    <a href="/" class="logo-block">
      <div class="logo-mark" aria-hidden="true">ХМ</div>
      <div class="logo-text">
        <div class="logo-text__title">{$t.header.logoTitle}</div>
        <div class="logo-text__subtitle">{$t.header.logoSubtitle}</div>
      </div>
    </a>

    <button class="nav-toggle">
      {$t.header.menu} <span></span>
    </button>

    <nav class="nav" aria-label="Основна навігація">
      <ul class="nav-list">
        <li><a class="nav-link" href="#about">{$t.header.nav.about}</a></li>
        <li><a class="nav-link" href="#features">{$t.header.nav.features}</a></li>
        <li><a class="nav-link" href="#presets">{$t.header.nav.presets}</a></li>
        <li><a class="nav-link" href="#origin">{$t.header.nav.origin}</a></li>
        <li><a class="nav-link" href="#download">{$t.header.nav.download}</a></li>
        <li><a class="nav-link" href="#faq">{$t.header.nav.faq}</a></li>
      </ul>
    </nav>
  </div>
</header>
