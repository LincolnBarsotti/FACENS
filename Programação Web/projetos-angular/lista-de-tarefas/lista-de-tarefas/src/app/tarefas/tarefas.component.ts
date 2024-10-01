import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
  
  tarefas = {
    descricaoDaTarefa: "",
    selectedStatus: ""
  }

  listaDeTarefas: objetoTarefa[] = [
    { descricao: 'Fazer compras', status: false },
    { descricao: 'Estudar para a prova', status: true },
    { descricao: 'Reunião com o cliente', status: false },
    { descricao: 'Enviar relatório', status: true },
    { descricao: 'Agendar consulta médica', status: false }
  ];

  validarStatus(strg: string){
    if(strg == "f"){
      return false
    }
    return true;
  }
  
  criar() {
    if (this.tarefas.descricaoDaTarefa != "" && this.tarefas.selectedStatus != "") {
      let tarefaMomentanea: objetoTarefa = {
        descricao: this.tarefas.descricaoDaTarefa,
        status: this.validarStatus(this.tarefas.selectedStatus)
      };

      this.listaDeTarefas.push(tarefaMomentanea);
      console.log(this.listaDeTarefas);

      this.tarefas.descricaoDaTarefa = "";
      this.tarefas.selectedStatus = "";
    }else{
      alert("Atribua um status ou uma descrição");
    }
  }

  deletarTarefa(tarefaListada:objetoTarefa){
    this.listaDeTarefas = this.listaDeTarefas.filter( t => t !== tarefaListada);
  }

  mudarStatusDaTarefa(tarefaListada:objetoTarefa){
    for (let i = 0; i < this.listaDeTarefas.length; i++) {
      if(this.listaDeTarefas[i] == tarefaListada){
        this.listaDeTarefas[i].status = !tarefaListada.status;
      }
    }
  }

  styleObject = {
    'color': 'green',
    'font-weight': 'bold'
  };

}
interface objetoTarefa {
  descricao: string;
  status: boolean;
}