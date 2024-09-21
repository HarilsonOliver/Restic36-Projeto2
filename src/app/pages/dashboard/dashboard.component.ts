import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = [
    { title: 'Card 1', content: 'Content 1' },
    { title: 'Card 2', content: 'Content 2' },
    { title: 'Card 3', content: 'Content 3' },
    { title: 'Card 4', content: 'Content 4' }
  ];

  currentIndex = 0;
  nextIndex = 1;

  constructor(private router: Router) {}

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.nextIndex = (this.currentIndex + 1) % this.cards.length;
  }

  logout() {
    localStorage.removeItem('authToken'); // Remova o token de autenticação
    this.router.navigate(['/login']); // Redirecione para a página de login
  }
}
