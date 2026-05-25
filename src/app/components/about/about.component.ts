import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RevealDirective } from "../../directives/reveal.directive";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="section">
      <div class="container-app grid lg:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <span appReveal class="eyebrow">01 — About</span>
          <h2 appReveal="1" class="section-title">
            A storyteller who codes,<br/>and codes who stories.
          </h2>
        </div>

        <div class="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-[rgb(var(--fg-muted))]">
          <p appReveal="2">
            I'm <span class="text-[rgb(var(--fg))] font-medium">MD. Yusuf Ahmed</span> — born on the
            22nd of June, 1999 in Dhaka, Bangladesh. I grew up curious about everything:
            why the rivers shimmer like that around dusk, how a single chord can change a
            room, why some lines of code feel like poetry.
          </p>
          <p appReveal="3">
            I'm currently in my 3rd year of <span class="text-[rgb(var(--fg))]">B.Sc. in Computer Science & Engineering</span>
            at American International University Bangladesh (AIUB). When I'm not at uni,
            you'll find me volunteering with the kids at JAAGO, picking up my guitar after
            dark, hopping on PUBG with friends, or framing a moment behind a lens.
          </p>
          <p appReveal="4">
            I believe the best people are the ones who lift others up. That's the through-line
            of everything I do — building, playing, teaching, telling stories.
          </p>

          <ul appReveal="5" class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            <li class="card p-4">
              <div class="text-3xl font-display font-semibold text-sun">10+</div>
              <div class="text-xs text-[rgb(var(--fg-muted))] mt-1">Years volunteering</div>
            </li>
            <li class="card p-4">
              <div class="text-3xl font-display font-semibold text-sun">5</div>
              <div class="text-xs text-[rgb(var(--fg-muted))] mt-1">Communities</div>
            </li>
            <li class="card p-4">
              <div class="text-3xl font-display font-semibold text-sun">∞</div>
              <div class="text-xs text-[rgb(var(--fg-muted))] mt-1">Ideas in flight</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
