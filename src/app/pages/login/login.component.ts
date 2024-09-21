import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  public isLoading: boolean = false;
  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.isLoading = true;
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res => {
      this.isLoading = false;
      const user = res.find((u: any) => u.email === loginData.email && u.password === loginData.password);
      if (user) {
        alert('Logado com sucesso');
        localStorage.setItem('authToken', user.id);
        this.router.navigate(["dashboard"]);
      } else {
        alert("Usuário não encontrado.");
      }
    }, err => {
      alert("Algo deu errado.");
      this.isLoading = false;
    });
  }
}
