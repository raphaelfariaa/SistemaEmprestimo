import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';


@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css']
})




export class SolicitacaoComponent implements OnInit {

  
  tipopessoa: any [];
  tipo: any;
  estadocivil: any [] ;
  estado: any;
  renda: any [];
  rendapessoa: any;
  genero: any [];
  generopessoa: any;


  constructor(private router: Router) { 

    this.estadocivil = [
      {label: 'Solteiro(a)', value: 'Solteiro(a)'},
      {label: 'Casado(a)', value: 'Casado(a)'},
      {label: 'Divorciado', value: 'Divorciado(a)'},
      {label: 'Viúva', value: 'Viúva'}
    ];
    this.tipopessoa = [
      {label: 'Pessoa Física', value: 'Pessoa Física'},
      {label: 'Pessoa Jurídica', value: 'Pessoa Jurídica'}
    ];
    this.renda = [
      {label: '1 a 3 salários', value: '1 a 3 salários'},
      {label: '3 a 5 salários', value: 'Acima de 5 salários'},
      {label: 'Acima de 5 salários', value: 'Acima de 5 salários'}
    ];
    this.genero = [
      {label: 'Masculino', value: 'Masculino'},
      {label: 'Feminino', value: 'Feminino'},
      {label: 'Outro', value:'Outro'}
    ];
    
  }

  ngOnInit() {
    

  }

  
  onSubmit(solicitacaoform: NgForm) {
    localStorage.setItem('tipo', solicitacaoform.value.tipo);
    localStorage.setItem('nome', solicitacaoform.value.nome);
    localStorage.setItem('cpf', solicitacaoform.value.cpf);
    localStorage.setItem('cnpj', solicitacaoform.value.cnpj);
    localStorage.setItem('dataNascimento', solicitacaoform.value.dataNascimento);
    localStorage.setItem('endereco', solicitacaoform.value.endereco);
    localStorage.setItem('cidade', solicitacaoform.value.cidade);
    localStorage.setItem('estado', solicitacaoform.value.estado);
    localStorage.setItem('profissao', solicitacaoform.value.profissao);
    localStorage.setItem('email', solicitacaoform.value.email);
    localStorage.setItem('telefone', solicitacaoform.value.telefone);
    localStorage.setItem('estadocivil', solicitacaoform.value.estadocivil);
    localStorage.setItem('genero', solicitacaoform.value.genero);
    localStorage.setItem('renda', solicitacaoform.value.renda);
    this.router.navigate(['/home']);
  }
}
