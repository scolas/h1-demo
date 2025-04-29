import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { CompanygrowthComponent } from './components/companygrowth/companygrowth.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
     NavbarComponent,
     TopBannerComponent,
     OurMissionComponent,
     CompanygrowthComponent,
     TestimonialsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'healthPlanOne';
}
