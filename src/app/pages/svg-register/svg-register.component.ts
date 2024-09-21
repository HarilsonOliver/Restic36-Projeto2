import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svg-register',
  templateUrl: './svg-register.component.html',
  styleUrls: ['./svg-register.component.scss']
})
export class SvgRegisterComponent {
  svg = { name: '', content: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:3000/svgs', this.svg).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
}
