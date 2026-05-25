import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RevealDirective } from "../../directives/reveal.directive";

interface Social {
  label: string;
  handle: string;
  href: string;
  iconPath: string;
  accent: string;
}

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="section bg-[rgb(var(--bg-elev))]/40 border-y border-[rgb(var(--line))]">
      <div class="container-app">
        <div class="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div class="lg:col-span-7">
            <span appReveal class="eyebrow">06 — Contact</span>
            <h2 appReveal="1" class="section-title">
              Let's <span class="text-gradient">make something</span> together.
            </h2>
            <p appReveal="2" class="lede">
              I'm easiest to reach on the channels below. Whether it's collab,
              a coffee in Dhaka, or a question about volunteering — slide in.
            </p>
          </div>
          <div appReveal="3" class="lg:col-span-5 lg:text-right">
            <div class="font-mono text-xs uppercase tracking-widest text-[rgb(var(--fg-muted))] mb-2">Based in</div>
            <div class="font-display text-2xl font-medium">Dhaka, Bangladesh 🇧🇩</div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (s of socials; track s.href; let i = $index) {
            <a
              appReveal="{{ i + 1 }}"
              [href]="s.href"
              target="_blank"
              rel="noopener noreferrer"
              class="card p-6 group flex flex-col gap-4 relative overflow-hidden"
            >
              <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   [style.background]="'radial-gradient(closest-side, rgb(' + s.accent + ' / 0.4), transparent)'"></div>
              <div class="relative flex items-center justify-between">
                <div class="w-11 h-11 rounded-2xl border border-[rgb(var(--line))] grid place-items-center group-hover:rotate-6 group-hover:border-sun/60 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-[rgb(var(--fg))]">
                    <path [attr.d]="s.iconPath"/>
                  </svg>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[rgb(var(--fg-muted))] group-hover:text-sun group-hover:-translate-y-1 group-hover:translate-x-1 transition-all">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </div>
              <div class="relative">
                <div class="font-display text-lg font-semibold group-hover:text-sun transition-colors">{{ s.label }}</div>
                <div class="text-sm font-mono text-[rgb(var(--fg-muted))] truncate">{{ s.handle }}</div>
              </div>
            </a>
          }
        </div>

        <div appReveal="5" class="mt-16 text-center">
          <p class="text-[rgb(var(--fg-muted))] mb-3 text-sm uppercase tracking-widest font-mono">Or, the old fashioned way</p>
          <a href="mailto:hello@mdyusufahmed.com"
             class="inline-flex items-center gap-3 font-display text-2xl sm:text-3xl font-semibold link">
            hello&#64;mdyusufahmed.com
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly socials: Social[] = [
    {
      label: "Facebook",
      handle: "yusuf.ahmed4",
      href: "https://www.facebook.com/yusuf.ahmed4",
      accent: "59 130 246",
      iconPath: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"
    },
    {
      label: "Instagram",
      handle: "yusuf.ahmed71",
      href: "https://www.instagram.com/yusuf.ahmed71/",
      accent: "255 107 107",
      iconPath: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.51.01-4.75.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.27.83-.39.39-.63.76-.83 1.27-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.27.39.39.76.63 1.27.83.39.15.97.33 2.04.38 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.27-.83.39-.39.63-.76.83-1.27.15-.39.33-.97.38-2.04.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.07-.23-1.65-.38-2.04a3.42 3.42 0 0 0-.83-1.27 3.42 3.42 0 0 0-1.27-.83c-.39-.15-.97-.33-2.04-.38-1.24-.06-1.6-.07-4.75-.07zm0 3.07a5.05 5.05 0 1 1 0 10.1 5.05 5.05 0 0 1 0-10.1zm0 8.33a3.28 3.28 0 1 0 0-6.56 3.28 3.28 0 0 0 0 6.56zm6.42-8.53a1.18 1.18 0 1 1-2.36 0 1.18 1.18 0 0 1 2.36 0z"
    },
    {
      label: "YouTube (main)",
      handle: "@yusufahmed",
      href: "https://www.youtube.com/@yusufahmed",
      accent: "239 68 68",
      iconPath: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"
    },
    {
      label: "YouTube (gaming)",
      handle: "@howimetteemo",
      href: "https://www.youtube.com/@howimetteemo",
      accent: "255 198 41",
      iconPath: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"
    }
  ];
}
