import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-hero",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hero" class="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
      <!-- background blobs -->
      <div aria-hidden="true" class="absolute inset-0 -z-10">
        <div class="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full opacity-50 animate-blob"
             style="background: radial-gradient(closest-side, rgb(255 198 41 / 0.45), transparent);"></div>
        <div class="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full opacity-40 animate-blob"
             style="background: radial-gradient(closest-side, rgb(255 107 107 / 0.35), transparent); animation-delay: -6s;"></div>
        <div class="absolute -bottom-32 left-1/3 w-[28rem] h-[28rem] rounded-full opacity-30 animate-blob"
             style="background: radial-gradient(closest-side, rgb(120 180 255 / 0.3), transparent); animation-delay: -12s;"></div>
        <div class="grain"></div>
        <div class="absolute inset-0"
             style="background:
               linear-gradient(to bottom, transparent 70%, rgb(var(--bg)) 100%),
               radial-gradient(1200px 600px at 50% 0%, rgb(var(--accent)/0.06), transparent 60%);"></div>
      </div>

      <div class="container-app grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        <!-- left: copy -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgb(var(--line))] bg-[rgb(var(--bg-elev))]/40 backdrop-blur text-xs text-[rgb(var(--fg-muted))] mb-6 animate-fade-up">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-sun"></span>
            </span>
            <span>Open to opportunities · Dhaka, Bangladesh</span>
          </div>

          <h1 class="font-display font-semibold leading-[0.98] tracking-tight text-[clamp(2.75rem,8vw,6rem)] animate-fade-up" style="animation-delay: 0.08s;">
            <span class="block text-[rgb(var(--fg))]">MD. Yusuf</span>
            <span class="block text-gradient">Ahmed.</span>
          </h1>

          <figure class="mt-8 max-w-xl animate-fade-up" style="animation-delay: 0.18s;">
            <blockquote class="relative pl-6 border-l-2 border-sun">
              <p class="font-display italic text-xl sm:text-2xl leading-snug text-[rgb(var(--fg))]/90">
                "A kid with a million dreams and a centillion ideas to endeavor."
              </p>
            </blockquote>
          </figure>

          <p class="mt-6 max-w-xl text-[rgb(var(--fg-muted))] text-base sm:text-lg leading-relaxed animate-fade-up" style="animation-delay: 0.28s;">
            3rd-year CSE student at AIUB · JAAGO Foundation alumni · hobbyist musician,
            gamer, and storyteller through photo and video.
          </p>

          <div class="mt-10 flex flex-wrap gap-3 animate-fade-up" style="animation-delay: 0.38s;">
            <a href="#about"
               class="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sun text-ink-950 font-semibold hover:bg-sun-soft transition-all duration-300 hover:gap-3 animate-pulse-glow">
              Get to know me
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgb(var(--line))] hover:border-sun text-[rgb(var(--fg))] transition-colors">
              Say hello
            </a>
          </div>
        </div>

        <!-- right: photo card -->
        <div class="lg:col-span-5 relative animate-scale-in" style="animation-delay: 0.4s;">
          <div class="relative aspect-[4/5] max-w-md mx-auto">
            <!-- decorative frames -->
            <div class="absolute -inset-3 rounded-[2rem] border border-sun/30 rotate-[3deg]"></div>
            <div class="absolute -inset-1 rounded-[1.75rem] border border-coral/30 -rotate-[2deg]"></div>

            <div class="relative h-full w-full rounded-[1.5rem] overflow-hidden border border-[rgb(var(--line))] shadow-2xl shadow-black/40">
              <img
                src="images/boat.jpg"
                alt="MD. Yusuf Ahmed on a wooden boat with a bright blue sky behind"
                class="h-full w-full object-cover animate-float-slow"
                loading="eager"
                fetchpriority="high"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent"></div>

              <!-- sticker badges -->
              <div class="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-sun text-ink-950 text-xs font-bold flex items-center gap-1.5 animate-wiggle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
                CSE @ AIUB
              </div>
              <div class="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-coral text-white text-xs font-bold animate-float" style="animation-delay: -3s;">
                #IamJAAGO
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- scroll cue -->
      <a href="#about" class="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgb(var(--fg-muted))] flex flex-col items-center gap-2 group" aria-label="Scroll to about section">
        <span class="text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <span class="w-px h-12 bg-gradient-to-b from-[rgb(var(--fg-muted))] to-transparent animate-bounce-soft origin-top"></span>
      </a>
    </section>
  `
})
export class HeroComponent {}
