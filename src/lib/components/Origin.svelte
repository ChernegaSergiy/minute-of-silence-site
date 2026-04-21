<script>
  import { t } from '../i18n/index.js';
</script>

<section id="origin" class="section">
  <div class="container">
    <header class="section__header">
      <div class="section__eyebrow">{$t.origin.eyebrow}</div>
      <h2 class="section__title section__title--compact">{$t.origin.title}</h2>
      <p class="section__description">{$t.origin.description}</p>
    </header>

    <div class="grid grid-cols-2 gap-8 max-w-4xl">
      <div class="flex flex-col gap-4">
        <div class="border-4 border-black bg-black text-white p-4">
          <p class="text-xs uppercase tracking-widest opacity-75 mb-1">{$t.origin.authorLabel}</p>
          <p class="text-2xl font-black uppercase leading-none">{$t.origin.authorName}</p>
        </div>
        <div class="border-2 border-black p-4 shadow-base">
          <p class="text-xs uppercase tracking-widest mb-3">{$t.origin.authorQuote}</p>
          <p class="text-sm leading-relaxed">{$t.origin.authorContent}</p>
          <div class="mt-4">
            <a href="https://bohdan.com.ua/memoryminute"
               class="btn btn--ghost underline hover:underline-wavy"
               target="_blank">
              {$t.origin.authorLink}
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="border-l-4 border-black pl-6 py-2">
          <p class="text-lg font-bold leading-snug mb-3">{$t.origin.quote}</p>
          <p class="text-xs uppercase tracking-widest opacity-50">{$t.origin.quoteAuthor}</p>
        </div>
      </div>
    </div>
  </div>
</section>