import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-growth-card',
  imports: [CommonModule],
  templateUrl: './growth-card.component.html',
  styleUrls: ['./growth-card.component.css']
})
export class GrowthCardComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() items: string[] = [];
}
