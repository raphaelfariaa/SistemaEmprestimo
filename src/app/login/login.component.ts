import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    if ((localStorage.getItem('cpf') === form.value.cpf) &&
    (localStorage.getItem('senha') === form.value.senha)) {
      this.router.navigate(['/home']);
    } else {
      form.reset();
      alert('CPF ou senha incorretos!');
    }
  }

}
