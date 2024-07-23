import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year = new Date().getFullYear();
  names: string[] = ['About', 'For Business', 'Suggestions', 'Help & FAQs', 'Contacts', 'Pricing']
  terms: string[] = ['Privacy', 'Terms']
}
