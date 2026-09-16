<script>
  import { t } from '../i18n/index.js';
</script>

<section id="community" class="section community-section relative flex flex-col justify-center items-end">
  <div class="container relative z-20">
    <div class="bg-black text-white border-4 border-black p-8 max-w-2xl ml-auto shadow-base">
      <div class="section__eyebrow opacity-75">{$t.community.eyebrow}</div>
      
      <h2 class="text-4xl md:text-5xl font-black uppercase leading-none mt-2 mb-6">
        {$t.community.title}
      </h2>
      
      <p class="text-lg leading-relaxed mb-4">
        {$t.community.description}
      </p>
      
      <p class="text-lg leading-relaxed mb-8 opacity-90">
        {$t.community.supportText}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <a href="https://www.instagram.com/vshanuy/"
           class="btn bg-white text-black border-white hover:bg-gray-200 hover:border-gray-200"
           target="_blank"
           rel="noopener noreferrer">
          {$t.community.button}
        </a>
      </div>
    </div>
  </div>
</section>
