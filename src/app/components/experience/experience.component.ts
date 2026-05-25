import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RevealDirective } from "../../directives/reveal.directive";

interface Role {
  title: string;
  org: string;
  years: string;
  description: string;
  highlights?: string[];
  accent?: "sun" | "coral" | "sky";
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="section">
      <div class="container-app">
        <div class="max-w-2xl">
          <span appReveal class="eyebrow">03 — Experience</span>
          <h2 appReveal="1" class="section-title">Volunteering is the work.</h2>
          <p appReveal="2" class="lede">
            Ten years of showing up — for kids, for communities, for the city.
            Each one taught me something different about people.
          </p>
        </div>

        <div class="mt-16 grid lg:grid-cols-12 gap-6">
          <!-- featured: JAAGO -->
          <article appReveal="1" class="lg:col-span-7 card p-8 sm:p-10 relative overflow-hidden">
            <div class="absolute -top-24 -right-24 w-64 h-64 rounded-full glow-sun opacity-70 pointer-events-none"></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-4">
                <span class="inline-flex w-12 h-12 rounded-2xl bg-sun text-ink-950 font-display font-bold text-xl items-center justify-center">J</span>
                <div>
                  <div class="font-display text-2xl sm:text-3xl font-semibold">JAAGO Foundation</div>
                  <div class="text-sm font-mono text-[rgb(var(--fg-muted))] tracking-wider">2015 — present · the long one</div>
                </div>
              </div>

              <p class="text-[rgb(var(--fg-muted))] leading-relaxed mb-6">
                Where I grew up, in a way. Started as a Core Volunteer and stayed close enough
                to the cause that the role kept evolving with me.
              </p>

              <ol class="relative space-y-3 border-l border-[rgb(var(--line))] pl-5 ml-1">
                @for (step of jaagoPath; track step; let i = $index) {
                  <li class="relative">
                    <span class="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-sun"
                          [style.opacity]="0.4 + (i * 0.15)"></span>
                    <span class="text-[rgb(var(--fg))] font-medium">{{ step }}</span>
                  </li>
                }
              </ol>
            </div>
          </article>

          <!-- side stack -->
          <div class="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            @for (role of otherRoles; track role.org; let i = $index) {
              <article appReveal="{{ i + 2 }}" class="card p-6 group">
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 class="font-display font-semibold text-lg text-[rgb(var(--fg))] group-hover:text-sun transition-colors">
                      {{ role.org }}
                    </h3>
                    <div class="text-xs font-mono text-[rgb(var(--fg-muted))] tracking-wider mt-1">{{ role.years }}</div>
                  </div>
                  <span class="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full border"
                        [class.text-sun]="role.accent === 'sun'"
                        [class.border-sun]="role.accent === 'sun'"
                        [class.text-coral]="role.accent === 'coral'"
                        [class.border-coral]="role.accent === 'coral'"
                        [class.text-blue-300]="role.accent === 'sky'"
                        [class.border-blue-400]="role.accent === 'sky'">
                    {{ role.title }}
                  </span>
                </div>
                <p class="text-sm text-[rgb(var(--fg-muted))] leading-relaxed">{{ role.description }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  readonly jaagoPath = [
    "Core Volunteer",
    "Committee Member",
    "General Secretary",
    "Intern (1 month)",
    "Alumni Member"
  ];

  readonly otherRoles: Role[] = [
    {
      title: "Volunteer",
      org: "Volunteer for Bangladesh (VBD)",
      years: "2015 — present",
      description: "Youth wing community service — clean-ups, awareness drives, festival outreach across Dhaka.",
      accent: "sun"
    },
    {
      title: "Volunteer",
      org: "TEDxDhaka",
      years: "Event team",
      description: "On-ground crew for one of Dhaka's flagship ideas events — logistics, hospitality, the floor.",
      accent: "coral"
    },
    {
      title: "Volunteer",
      org: "BYLC",
      years: "Bangladesh Youth Leadership Center",
      description: "Programs aimed at building youth leaders. Workshops, mentoring, and lots of listening.",
      accent: "sky"
    },
    {
      title: "Volunteer",
      org: "Save the Children Bangladesh",
      years: "Field programs",
      description: "Supporting initiatives for children's welfare, education access, and emergency response.",
      accent: "sun"
    },
    {
      title: "Community",
      org: "BDCyclists",
      years: "Active rider",
      description: "Bangladesh's largest cycling community. Group rides across the city and out of it.",
      accent: "coral"
    }
  ];
}
