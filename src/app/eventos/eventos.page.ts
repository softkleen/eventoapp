import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
eventos:any[] = [];
nome:string="";

  constructor(private service : ApiService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.carregar();
  }
  carregar(){
    return new Promise(ret =>{
      this.eventos = [];
      let dados = {
        requisicao:"listar",
        nome:""
      };
      this.service.connectApi(dados,"evento.php").subscribe(data =>{
        if(data["result"]=='0'){
          this.ionViewWillEnter();
        }else{
          for (let evento of data['result']){
            this.eventos.push(evento);
          }
        }
        //debugger;
    });
   });
}
}
