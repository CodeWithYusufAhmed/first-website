import { ChangeDetectionStrategy, Component, HostListener, signal } from "@angular/core";
import { RevealDirective } from "../../directives/reveal.directive";

interface Photo {
  src: string;
  alt: string;
  caption: string;
  tag: string;
  span: string;
}

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="gallery" class="section">
      <div class="container-app">
        <div class="max-w-2xl">
          <span appReveal class="eyebrow">05 — Gallery</span>
          <h2 appReveal="1" class="section-title">Moments, mostly.</h2>
          <p appReveal="2" class="lede">
            A handful of frames from the years. Tap any for the full view.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-2 md:grid-cols-12 gap-4 sm:gap-5">
          @for (photo of photos; track photo.src; let i = $index) {
            <button
              appReveal="{{ i + 1 }}"
              type="button"
              (click)="open(i)"
              [class]="'group relative overflow-hidden rounded-2xl border border-[rgb(var(--line))] hover:border-sun/60 transition-colors ' + photo.span"
              [attr.aria-label]="'Open: ' + photo.caption"
            >
              <img
                [src]="photo.src"
                [alt]="photo.alt"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div class="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div class="text-[10px] font-mono uppercase tracking-widest text-sun mb-1">{{ photo.tag }}</div>
                <div class="text-white font-display text-lg sm:text-xl font-medium leading-tight">{{ photo.caption }}</div>
              </div>
              <div class="absolute top-3 right-3 w-9 h-9 rounded-full bg-ink-950/60 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </button>
          }
        </div>
      </div>

      <!-- lightbox -->
      @if (active() !== null) {
        <div
          class="fixed inset-0 z-50 bg-ink-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 animate-fade-in"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="'Photo: ' + photos[active()!].caption"
          (click)="close()"
        >
          <button
            type="button"
            (click)="close(); $event.stopPropagation()"
            class="absolute top-5 right-5 w-12 h-12 rounded-full bg-ink-900/80 border border-ink-700 grid place-items-center text-white hover:bg-sun hover:text-ink-950 hover:rotate-90 transition-all duration-300"
            aria-label="Close gallery"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M6 6l12 12M18 6l-12 12"/>
            </svg>
          </button>

          <button
            type="button"
            (click)="prev(); $event.stopPropagation()"
            class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink-900/80 border border-ink-700 grid place-items-center text-white hover:bg-sun hover:text-ink-950 transition-colors"
            aria-label="Previous photo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <button
            type="button"
            (click)="next(); $event.stopPropagation()"
            class="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ink-900/80 border border-ink-700 grid place-items-center text-white hover:bg-sun hover:text-ink-950 transition-colors"
            aria-label="Next photo"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 6l6 6-6 6"/>
            </svg>
          </button>

          <figure (click)="$event.stopPropagation()" class="max-w-5xl w-full max-h-full flex flex-col items-center gap-4 animate-scale-in">
            <img
              [src]="photos[active()!].src"
              [alt]="photos[active()!].alt"
              class="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption class="text-center">
              <div class="text-xs font-mono uppercase tracking-widest text-sun">{{ photos[active()!].tag }}</div>
              <div class="text-white font-display text-xl mt-1">{{ photos[active()!].caption }}</div>
              <div class="text-xs text-ink-300 mt-2 font-mono">{{ active()! + 1 }} / {{ photos.length }}</div>
            </figcaption>
          </figure>
        </div>
      }
    </section>
  `
})
export class GalleryComponent {
  readonly active = signal<number | null>(null);

  readonly photos: Photo[] = [
    {
      src: "images/boat.jpg",
      alt: "Sitting on a wooden boat with a bright blue sky behind",
      caption: "On the water, somewhere quiet.",
      tag: "Travel",
      span: "col-span-2 md:col-span-7 aspect-[16/10] md:aspect-[16/10]"
    },
    {
      src: "images/jaago.jpg",
      alt: "Volunteering at JAAGO Foundation, holding a smiling kid in a green shirt",
      caption: "#IamJAAGO — the kids make every shift worth it.",
      tag: "Volunteer",
      span: "col-span-2 md:col-span-5 aspect-[4/5] md:aspect-auto"
    },
    {
      src: "images/guitar.jpg",
      alt: "Playing guitar at night on a rooftop, low light",
      caption: "Four chords and a quiet night.",
      tag: "Music",
      span: "col-span-2 md:col-span-5 aspect-[3/2]"
    },
    {
      src: "images/cycling.jpg",
      alt: "On a bike in a red shirt with cycling gloves",
      caption: "BDCyclists, suited up.",
      tag: "Community",
      span: "col-span-2 md:col-span-7 aspect-[3/2]"
    }
  ];

  open(i: number): void {
    this.active.set(i);
    document.body.style.overflow = "hidden";
  }

  close(): void {
    this.active.set(null);
    document.body.style.overflow = "";
  }

  next(): void {
    const i = this.active();
    if (i === null) return;
    this.active.set((i + 1) % this.photos.length);
  }

  prev(): void {
    const i = this.active();
    if (i === null) return;
    this.active.set((i - 1 + this.photos.length) % this.photos.length);
  }

  @HostListener("document:keydown", ["$event"])
  onKey(e: KeyboardEvent): void {
    if (this.active() === null) return;
    if (e.key === "Escape") this.close();
    else if (e.key === "ArrowRight") this.next();
    else if (e.key === "ArrowLeft") this.prev();
  }
}
