import { Component } from '@angular/core';
@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      testimonials: 'I love working here because the environment is supportive and collaborative!',
      name: 'Jane Doe ',
      title: 'Manager',
      location: 'Trumbull',
      imageUrl: 'assets/images/k.png'
    },
    {
      testimonials: 'HPOne .',
      name: 'John Doe',
      title: 'Senior Developer',
      location: 'Remote',
      imageUrl: 'assets/images/john.png'
    }
  ]
}
