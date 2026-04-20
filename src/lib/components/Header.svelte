<script>
  let menuOpen = $state(false);
</script>

<header class="header">
  <div class="header-inner">
    <a href="#" class="logo-block">
      <div class="logo-mark" aria-hidden="true">ХМ</div>
      <div class="logo-text">
        <div class="logo-text__title">Хвилина мовчання</div>
        <div class="logo-text__subtitle">Desktop App</div>
      </div>
    </a>

    <button 
      class="nav-toggle" 
      aria-expanded={menuOpen}
      onclick={() => menuOpen = !menuOpen}
    >
      МЕНЮ <span></span>
    </button>

    <nav class="nav" aria-label="Основна навігація">
      <ul class="nav-list">
        <li><a class="nav-link" href="#about">Про</a></li>
        <li><a class="nav-link" href="#features">Функції</a></li>
        <li><a class="nav-link" href="#presets">Пресети</a></li>
        <li><a class="nav-link" href="#origin">Витоки</a></li>
        <li><a class="nav-link" href="#download">Завантажити</a></li>
        <li><a class="nav-link" href="#faq">FAQ</a></li>
      </ul>
    </nav>
  </div>
</header>