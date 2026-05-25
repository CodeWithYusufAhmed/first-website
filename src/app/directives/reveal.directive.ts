import { isPlatformBrowser } from "@angular/common";
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID
} from "@angular/core";

@Directive({
  selector: "[appReveal]",
  standalone: true,
  host: { class: "reveal" }
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() appReveal: string | number | "" = "";

  private observer?: IntersectionObserver;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.appReveal !== "" && this.appReveal !== undefined) {
      this.host.nativeElement.dataset["stagger"] = String(this.appReveal);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
