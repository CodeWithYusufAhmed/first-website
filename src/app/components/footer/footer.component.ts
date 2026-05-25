import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-t border-[rgb(var(--line))] py-10">
      <div class="container-app flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[rgb(var(--fg-muted))]">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sun text-ink-950 font-bold text-xs">Y</span>
          <span>© {{ year }} MD. Yusuf Ahmed. Built with curiosity in Dhaka.</span>
        </div>
        <a href="#hero" class="link inline-flex items-center gap-2 group">
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-y-0.5 transition-transform">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </a>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}
