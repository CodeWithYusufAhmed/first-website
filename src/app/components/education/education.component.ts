import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RevealDirective } from "../../directives/reveal.directive";

interface EducationItem {
  school: string;
  detail: string;
  years: string;
  current?: boolean;
}

@Component({
  selector: "app-education",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="education" class="section bg-[rgb(var(--bg-elev))]/40 border-y border-[rgb(var(--line))]">
      <div class="container-app">
        <div class="max-w-2xl">
          <span appReveal class="eyebrow">02 — Education</span>
          <h2 appReveal="1" class="section-title">From playgroup to programming.</h2>
          <p appReveal="2" class="lede">
            A learner's path that started with crayons and is currently somewhere
            between linked lists and life lessons.
          </p>
        </div>

        <ol class="mt-16 relative border-l-2 border-[rgb(var(--line))] ml-3 sm:ml-6">
          @for (item of items; track item.school; let i = $index) {
            <li appReveal="{{ i + 1 }}" class="relative pl-8 sm:pl-12 pb-12 last:pb-0">
              <span class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[rgb(var(--bg))] border-2 grid place-items-center"
                    [class.border-sun]="item.current" [class.border-ink-500]="!item.current">
                @if (item.current) {
                  <span class="w-2 h-2 rounded-full bg-sun animate-ping absolute"></span>
                  <span class="w-2 h-2 rounded-full bg-sun"></span>
                } @else {
                  <span class="w-1.5 h-1.5 rounded-full bg-[rgb(var(--fg-muted))]"></span>
                }
              </span>

              <div class="card p-6 sm:p-7 group">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 class="font-display font-semibold text-xl sm:text-2xl text-[rgb(var(--fg))] group-hover:text-sun transition-colors">
                    {{ item.school }}
                  </h3>
                  <span class="text-xs font-mono text-[rgb(var(--fg-muted))] tracking-wider">{{ item.years }}</span>
                </div>
                <p class="mt-2 text-[rgb(var(--fg-muted))]">{{ item.detail }}</p>
                @if (item.current) {
                  <span class="mt-3 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sun">
                    <span class="w-1.5 h-1.5 rounded-full bg-sun animate-pulse"></span>
                    Currently studying
                  </span>
                }
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `
})
export class EducationComponent {
  readonly items: EducationItem[] = [
    {
      school: "Dhanmondi Tutorial",
      detail: "Playgroup through Class 5 — English Medium. The crayon years.",
      years: "Early years"
    },
    {
      school: "Scholars School & College",
      detail: "Class 7 through Class 10 — English Version. Where curiosity got serious.",
      years: "Class 7–10"
    },
    {
      school: "B.A.F. Shaheen College",
      detail: "Higher Secondary Certificate (HSC) — Class 11 and 12.",
      years: "Class 11–12"
    },
    {
      school: "American International University Bangladesh",
      detail: "B.Sc. in Computer Science & Engineering. Currently in 3rd year.",
      years: "Present",
      current: true
    }
  ];
}
