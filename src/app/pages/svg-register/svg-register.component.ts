import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-svg-register',
  templateUrl: './svg-register.component.html',
  styleUrls: ['./svg-register.component.scss']
})
export class SvgRegisterComponent implements OnInit {
  svg = { name: '', content: '' };
  svgList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadSvgs();
  }

  onSubmit() {
    this.http.post('http://localhost:3000/svgs', this.svg).subscribe(() => {
      this.loadSvgs(); // Recarrega a lista após o registro
      window.location.reload();
    });
  }

  loadSvgs() {
    this.http.get<any[]>('http://localhost:3000/svgs').subscribe(data => {
      this.svgList = data;
    });
  }

  onDelete(id: string) {
    this.http.delete(`http://localhost:3000/svgs/${id}`).subscribe(() => {
      this.loadSvgs(); // Recarrega a lista após a exclusão
      window.location.reload();
    });
  }
}
