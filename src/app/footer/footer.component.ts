import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  email: string = '';

  // This method would be triggered when the user submits their email
  subscribeToNewsletter() {
    if (this.email.trim()) {
      // Logic to handle the subscription (e.g., API call)
      console.log('Subscribed with email:', this.email);
      // Reset the input field
      this.email = '';
    } else {
      console.log('Email is required.');
    }
  }
}
