import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RevealDirective } from "../../directives/reveal.directive";

@Component({
  selector: "app-hobbies",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="hobbies" class="section bg-[rgb(var(--bg-elev))]/40 border-y border-[rgb(var(--line))]">
      <div class="container-app">
        <div class="max-w-2xl">
          <span appReveal class="eyebrow">04 — Passions</span>
          <h2 appReveal="1" class="section-title">The other thirds of me.</h2>
          <p appReveal="2" class="lede">
            What I do when nobody's grading it.
          </p>
        </div>

        <div class="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- music -->
          <article appReveal="1" class="card p-7 group relative overflow-hidden">
            <div class="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
                 style="background: radial-gradient(closest-side, rgb(255 198 41 / 0.6), transparent);"></div>
            <div class="relative">
              <div class="w-12 h-12 rounded-2xl bg-sun/10 border border-sun/30 grid place-items-center mb-5 group-hover:rotate-6 transition-transform duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sun">
                  <path d="M9 18V5l12-2v13"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl font-semibold mb-2">Music</h3>
              <p class="text-[rgb(var(--fg-muted))] leading-relaxed">
                Four chords on the guitar and a whole lot of feelings.
                Freestyle singing in <span class="text-[rgb(var(--fg))]">Bangla</span> and <span class="text-[rgb(var(--fg))]">English</span> —
                whatever the rooftop demands.
              </p>
              <div class="mt-5 flex gap-2 flex-wrap">
                <span class="text-xs px-2.5 py-1 rounded-full bg-sun/10 border border-sun/30 text-sun font-mono">guitar</span>
                <span class="text-xs px-2.5 py-1 rounded-full bg-sun/10 border border-sun/30 text-sun font-mono">vocals</span>
                <span class="text-xs px-2.5 py-1 rounded-full bg-sun/10 border border-sun/30 text-sun font-mono">rooftop sessions</span>
              </div>
            </div>
          </article>

          <!-- gaming -->
          <article appReveal="2" class="card p-7 group relative overflow-hidden">
            <div class="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
                 style="background: radial-gradient(closest-side, rgb(255 107 107 / 0.6), transparent);"></div>
            <div class="relative">
              <div class="w-12 h-12 rounded-2xl bg-coral/10 border border-coral/30 grid place-items-center mb-5 group-hover:-rotate-6 transition-transform duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-coral">
                  <line x1="6" y1="11" x2="10" y2="11"/>
                  <line x1="8" y1="9" x2="8" y2="13"/>
                  <line x1="15" y1="12" x2="15.01" y2="12"/>
                  <line x1="18" y1="10" x2="18.01" y2="10"/>
                  <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258C21.305 7.522 19.642 5 17.32 5z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl font-semibold mb-2">Gaming</h3>
              <p class="text-[rgb(var(--fg-muted))] leading-relaxed">
                Started with <span class="text-[rgb(var(--fg))]">Call of Duty: Modern Warfare</span> in school.
                Played the most <span class="text-[rgb(var(--fg))]">League of Legends</span> —
                Teemo main, Season 6. These days it's <span class="text-[rgb(var(--fg))]">PUBG Mobile</span>
                with the boys.
              </p>
              <div class="mt-5 flex gap-2 flex-wrap">
                <span class="text-xs px-2.5 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral font-mono">Teemo S6</span>
                <span class="text-xs px-2.5 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral font-mono">PUBGM</span>
                <span class="text-xs px-2.5 py-1 rounded-full bg-coral/10 border border-coral/30 text-coral font-mono">MW</span>
              </div>
            </div>
          </article>

          <!-- storytelling -->
          <article appReveal="3" class="card p-7 group relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div class="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
                 style="background: radial-gradient(closest-side, rgb(120 180 255 / 0.6), transparent);"></div>
            <div class="relative">
              <div class="w-12 h-12 rounded-2xl bg-blue-400/10 border border-blue-400/30 grid place-items-center mb-5 group-hover:rotate-6 transition-transform duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-300">
                  <path d="M23 7l-7 5 7 5V7z"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl font-semibold mb-2">Storytelling</h3>
              <p class="text-[rgb(var(--fg-muted))] leading-relaxed">
                Photo and video shooting, plus the long quiet hours editing them into something
                worth watching. The frame, the cut, the moment.
              </p>
              <div class="mt-5 flex gap-2 flex-wrap">
                <span class="text-xs px-2.5 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-300 font-mono">photo</span>
                <span class="text-xs px-2.5 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-300 font-mono">video</span>
                <span class="text-xs px-2.5 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-300 font-mono">edit</span>
              </div>
            </div>
          </article>
        </div>

        <!-- YouTube channels -->
        <div appReveal="4" class="mt-16 grid md:grid-cols-2 gap-6">
          <a href="https://www.youtube.com/@yusufahmed" target="_blank" rel="noopener noreferrer"
             class="card p-7 group flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl bg-coral grid place-items-center shrink-0 group-hover:scale-110 transition-transform duration-500">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/>
              </svg>
            </div>
            <div class="min-w-0">
              <div class="text-xs font-mono uppercase tracking-widest text-[rgb(var(--fg-muted))]">Main channel</div>
              <div class="font-display text-2xl font-semibold mt-1 group-hover:text-sun transition-colors">&#64;yusufahmed</div>
              <p class="text-[rgb(var(--fg-muted))] mt-2 text-sm">Slices of life, music, stories — whatever's loud in my head that week.</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-[rgb(var(--fg-muted))] group-hover:text-sun group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>

          <a href="https://www.youtube.com/@howimetteemo" target="_blank" rel="noopener noreferrer"
             class="card p-7 group flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl bg-sun grid place-items-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="text-ink-950">
                <polygon points="6 3 20 12 6 21 6 3"/>
              </svg>
            </div>
            <div class="min-w-0">
              <div class="text-xs font-mono uppercase tracking-widest text-[rgb(var(--fg-muted))]">Gaming channel</div>
              <div class="font-display text-2xl font-semibold mt-1 group-hover:text-sun transition-colors">How I Met Teemo</div>
              <p class="text-[rgb(var(--fg-muted))] mt-2 text-sm">Where the Season-6 Teemo main goes to relive the rift and ride the queue.</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto text-[rgb(var(--fg-muted))] group-hover:text-sun group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HobbiesComponent {}
