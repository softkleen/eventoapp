import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.page.html',
  styleUrls: ['./add-evento.page.scss'],
})
export class AddEventoPage implements OnInit {
id:number;
nome:string = "";
capacidade:number=0;
data:string;
eventos:any=[];
  constructor(private route:Router, private service:ApiService) { }

  ngOnInit() {
  }

  addEvento(){
   // gravar no banco de dados
    return new Promise(res => {
      let dados = {
        requisicao:"add",
        nome:this.nome,
        data:this.data,
        capacidade:this.capacidade
      };
     //debugger;
      this.service.connectApi(dados,'evento.php').subscribe(ret =>{
        if(ret['success']){
          console.log('Evento gravado com o ID: ' + ret['id']);
          this.route.navigate(['eventos']);
        }else{
          console.log('Evento não foi gravado!' + ret['msg']);
        }

      });
    });
    

   

  }// addEvento final <<<<<<<<<<

}
