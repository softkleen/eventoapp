import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.page.html',
  styleUrls: ['./add-evento.page.scss'],
})
export class AddEventoPage implements OnInit {
id:number;
nome_evento:string = "";
capacidade:number=0;
data:string;
eventos:any=[];
  constructor() { }

  ngOnInit() {
  }

  adicionar(){
   // gravar no banco de dados
   // gravar em banco local LocalStorage
    let dados = {
      nome:this.nome_evento,
      data:this.data,
      capacidade:this.capacidade
    };
    this.eventos.push(dados);
    console.log(this.eventos);
  }

}
