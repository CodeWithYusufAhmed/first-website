import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID, signal } from "@angular/core";

export type Theme = "dark" | "light";

const STORAGE_KEY = "mdy-theme";

@Injectable({ providedIn: "root" })
export class ThemeService {
  readonly theme = signal<Theme>("dark");

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    if (!isPlatformBrowser(this.platformId)) return;
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "dark";
    this.set(stored);
  }

  toggle(): void {
    this.set(this.theme() === "dark" ? "light" : "dark");
  }

  set(next: Theme): void {
    this.theme.set(next);
    const root = this.doc.documentElement;
    root.classList.toggle("light", next === "light");
    root.classList.toggle("dark", next === "dark");
    if (isPlatformBrowser(this.platformId)) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignore */ }
    }
  }
}
