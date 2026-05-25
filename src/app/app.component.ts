import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ThemeService } from "./services/theme.service";
import { NavComponent } from "./components/nav/nav.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HobbiesComponent } from "./components/hobbies/hobbies.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    HobbiesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-nav />
    <main id="main">
      <app-hero />
      <app-about />
      <app-education />
      <app-experience />
      <app-hobbies />
      <app-gallery />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class AppComponent {
  // Initialize theme on construction
  private readonly _theme = inject(ThemeService);
}
