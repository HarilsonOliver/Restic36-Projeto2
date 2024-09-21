import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  public signUpForm !: FormGroup
  public isLoading: boolean = false; // Adicione esta linha
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signUp() {
    this.isLoading = true;
    this.http.get<any>(`http://localhost:3000/signupUsersList?email=${this.signUpForm.value.email}`)
    .subscribe(existingUsers => {
      if (existingUsers.length > 0) {
        alert('Esse email já está em uso.');
        return;
      }

      // Se o email não existir, prosseguir com o registro
      this.http.post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
      .subscribe(res => {
        alert('Inscrito com sucesso.');
        this.signUpForm.reset();
        this.router.navigate(["dashboard"]);
      }, err => {
        alert("Algo deu errado.");
        this.isLoading = false;
      });
    });
  }


}


