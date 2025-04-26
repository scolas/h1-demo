import { Component } from '@angular/core';
import { CompanygrowthComponent } from "../companygrowth/companygrowth.component";
import { GrowthCardComponent } from '../growth-card/growth-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-growth-cards',
  imports: [CommonModule,GrowthCardComponent],
  templateUrl: './growth-cards.component.html',
  styleUrls: ['./growth-cards.component.css']
})
export class GrowthCardsComponent {
  cards =[
    {
      title: 'Employee Focused',
      icon: 'bi bi-hand-thumbs-up',
      items: [
        'Uniquely dedicated to your long-term success',
        'Agent oriented',
        'Down-to-earth leaders who listen'
      ]
    },
    {
      title: 'Technology & Analytics',
      icon: 'bi bi-bar-chart-line',
      items: [
        'Our secret ingredient',
        'Supports customer care and agent success',
        'Cutting edge and always improving'
      ]
    },
    {
      title: 'Marketing',
      icon: 'bi bi-megaphone',
      items: [
        'Committed to serve – our customers, agents, and partners',
        'Leading digital marketer'
      ]
    },
    {
      title: 'Partnerships',
      icon: 'bi bi-heart',
      items: [
        'Built on transparency and trust',
        'Always focused on the long term',
        'Do the right thing, every time'
      ]
    }
  ];
}
