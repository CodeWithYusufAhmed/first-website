import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from "@angular/core";
import { NgClass } from "@angular/common";
import { ThemeService } from "../../services/theme.service";

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed inset-x-0 top-0 z-40 transition-all duration-500"
      [ngClass]="{
        'backdrop-blur-xl bg-[rgb(var(--bg))]/70 border-b border-[rgb(var(--line))]': scrolled(),
        'border-b border-transparent': !scrolled()
      }"
    >
      <nav class="container-app flex items-center justify-between py-4">
        <a href="#hero" class="flex items-center gap-2 font-display font-semibold tracking-tight text-xl group">
          <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sun text-ink-950 font-bold transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-105">Y</span>
          <span class="hidden sm:inline">Yusuf<span class="text-sun">.</span></span>
        </a>

        <ul class="hidden md:flex items-center gap-1">
          @for (link of links; track link.href) {
            <li>
              <a
                [href]="link.href"
                class="px-3 py-2 text-sm rounded-full text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg-elev))] transition-colors"
              >{{ link.label }}</a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-2">
          <button
            type="button"
            (click)="theme.toggle()"
            [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            class="w-10 h-10 rounded-full border border-[rgb(var(--line))] hover:border-sun/60 grid place-items-center transition-colors group"
          >
            @if (theme.theme() === 'dark') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sun group-hover:rotate-12 transition-transform duration-500">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            } @else {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-ink-700 group-hover:-rotate-12 transition-transform duration-500">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            }
          </button>

          <button
            type="button"
            (click)="mobileOpen.set(!mobileOpen())"
            [attr.aria-label]="mobileOpen() ? 'Close menu' : 'Open menu'"
            class="md:hidden w-10 h-10 rounded-full border border-[rgb(var(--line))] hover:border-sun/60 grid place-items-center"
          >
            @if (!mobileOpen()) {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            } @else {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M6 6l12 12M18 6l-12 12"/>
              </svg>
            }
          </button>
        </div>
      </nav>

      @if (mobileOpen()) {
        <div class="md:hidden border-t border-[rgb(var(--line))] bg-[rgb(var(--bg))]/95 backdrop-blur-xl animate-fade-up">
          <ul class="container-app py-4 flex flex-col gap-1">
            @for (link of links; track link.href) {
              <li>
                <a
                  [href]="link.href"
                  (click)="mobileOpen.set(false)"
                  class="block px-4 py-3 rounded-xl text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg-elev))] transition-colors"
                >{{ link.label }}</a>
              </li>
            }
          </ul>
        </div>
      }
    </header>
  `
})
export class NavComponent {
  readonly theme = inject(ThemeService);
  readonly scrolled = signal(false);
  readonly mobileOpen = signal(false);

  readonly links: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Hobbies", href: "#hobbies" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  @HostListener("window:scroll")
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }
}
