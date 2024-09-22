import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Controle de abertura do sidebar
  opened = true;  // Inicia como aberto

  constructor(private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {}

  // Array para armazenar os SVGs dinâmicos
  svgs: { name: string, content: SafeHtml }[] = [];
  currentIndex = 0;
  nextIndex = 1;

  // Controle para o conteúdo do dashboard
  isRegisteringSvg = false;

  ngOnInit() {
    // Buscando os SVGs do servidor
    this.http.get<any[]>('http://localhost:3000/svgs').subscribe(data => {
      this.svgs = data.map(svg => ({
        name: svg.name,
        content: this.sanitizer.bypassSecurityTrustHtml(svg.content)  // Sanitizando o SVG
      }));
    });
  }

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.svgs.length;
    this.nextIndex = (this.currentIndex + 1) % this.svgs.length;
  }

  logout() {
    localStorage.removeItem('authToken'); // Remove o token de autenticação
    this.router.navigate(['/login']); // Redireciona para a página de login
  }

  // Função para mudar para a tela de registro de SVG
  openSvgRegister() {
    this.isRegisteringSvg = true;
  }

  // Função para voltar para o dashboard
  goToHome() {
    this.isRegisteringSvg = false;
  }

  // Função para abrir/fechar o sidebar
  toggleSidebar() {
    this.opened = !this.opened;
  }
}

