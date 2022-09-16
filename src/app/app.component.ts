import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'CadastroTelefone';
    usuario : string = '';
    telefone : string = '';
    index : number=0;
    users = [
      {name: 'Nome:', tel: 'Telefone:'}
    ];
   
  
    constructor(private httpClient : HttpClient){
    }
  
    public addCadastro(){
      this.users.push({name: this.usuario, tel: this.telefone})
      console.log("teste")  
    }
  }
  
  
