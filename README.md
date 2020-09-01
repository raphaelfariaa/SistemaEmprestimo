# Sistema Emprestimo

Este projeto foi criado utilizando [Angular CLI](https://github.com/angular/angular-cli) na versão 8.0.2. Foi utilizada a biblioteca de componentes PrimeNG.

## Execução
 
Execute `ng serve` para rodar a aplicação. O sistema estará disponível em `http://localhost:4200/`.

## Desenvolvimento

Para a tela de login, foi criada dois campos (CPF e senha), onde o botão login só estará disponível após o preenchimento dos campos. 
Na tela de cadastro, foram criados 4 campos (Nome, CPF, data de nascimento e senha) para preenchimento e os dados ficam armazenados no localStorage do broswer.
Ao logar, será redirecionado a tela Home, onde estará disponível no menu superior, as opções de Nova Solicitação e Acompanhamento de proposta.
Na tela de Nova Solicitação, foi criado um Form para a coleta dos dados e armazenamento no localStorage do broswer.
Na tela de Acompanhamento de proposta, a ideia é apenas realizar a busca de alguma proposta para o cliente pelo CPF (busca essa que seria realizada no localStorage). 
