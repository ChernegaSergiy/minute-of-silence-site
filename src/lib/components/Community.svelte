<script>
  import { t } from '../i18n/index.js';
</script>

<section id="community" class="section community-section">
  <!-- Optional dark gradient overlay if we want to darken the image globally -->
  <div class="community-overlay"></div>
  
  <div class="container relative h-full flex flex-col justify-center items-end">
    <!-- The glassmorphism / dark brutalist plate -->
    <div class="community-card">
      <div class="section__eyebrow">{$t.community.eyebrow}</div>
      
      <h2 class="text-4xl md:text-5xl font-black uppercase leading-none mt-2 mb-6 text-white">
        {$t.community.title}
      </h2>
      
      <p class="text-lg leading-relaxed mb-4 text-white">
        {$t.community.description}
      </p>
      
      <p class="text-lg leading-relaxed mb-8 opacity-90 text-white">
        {$t.community.supportText}
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <a href="https://www.instagram.com/vshanuy/"
           class="btn btn--primary"
           target="_blank"
           rel="noopener noreferrer"
           style="background-color: white; color: black; border-color: white;">
          {$t.community.button}
        </a>
        
        <!-- Photo credits commented out until permission is granted -->
        <!-- <span class="text-xs uppercase tracking-widest opacity-50 text-white">{$t.community.photoCredits}</span> -->
      </div>
    </div>
  </div>
</section>

<style>
  .community-section {
    position: relative;
    /* Use parallax attachment */
    background-image: url('/images/vshanuy-bg.png');
    background-size: cover;
    background-position: center 60%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    
    /* Make the section reasonably tall so the background is visible */
    min-height: 80vh;
    display: flex;
    align-items: center;
    padding: 0; /* Override default section padding if needed */
  }

  .community-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .community-section .container {
    position: relative;
    z-index: 2;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .community-card {
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 4px solid black;
    padding: 3rem 2.5rem;
    max-width: 650px;
    width: 100%;
    box-shadow: 12px 12px 0px rgba(0,0,0,1);
  }
  
  .community-card .section__eyebrow {
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    .community-card {
      padding: 2rem 1.5rem;
      margin-top: 4rem; /* Push down to show some image above */
      box-shadow: 6px 6px 0px rgba(0,0,0,1);
    }
    .community-section {
      background-attachment: scroll; /* Mobile Safari has bugs with fixed attachment */
      background-position: center 70%;
    }
  }
</style>
