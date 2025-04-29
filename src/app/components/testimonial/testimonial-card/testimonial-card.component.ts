import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css'
})
export class TestimonialCardComponent {
  @Input() testimonial!: String;
  @Input() img!: String;
  @Input() name!: String;
  @Input() position!: String;
  @Input() location!: String;
}
