import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  onSubmit(cadastrousuarioform: NgForm) {
    localStorage.setItem('cpf', cadastrousuarioform.value.cpf);
    localStorage.setItem('senha', cadastrousuarioform.value.senha);
    this.router.navigate(['/login']);
  }

}
