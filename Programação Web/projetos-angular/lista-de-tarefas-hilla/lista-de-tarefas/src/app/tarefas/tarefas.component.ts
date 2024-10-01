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

/*
Suponha que você esteja construindo um aplicativo para gerenciar tarefas e deseja exibir uma lista de tarefas concluídas e não concluídas:
A "Tarefa" terá as seguintes propriedades:
descrição: string
concluida: boolean
No componente que exibe a lista de tarefas, crie um array "tarefas" que contém no mínimo 5 tarefas, sendo algumas concluídas e outras não concluídas.
Use a diretiva *ngFor para iterar sobre o array "tarefas" e exibir cada tarefa em um elemento HTML <li> em uma lista não ordenada.
Use a diretiva [ngStyle] para aplicar um estilo de texto tachado (riscado) nas tarefas concluídas na lista.
Adicione um botão "Concluir" em cada tarefa da lista que alterna o valor da propriedade "concluida" da tarefa entre verdadeiro e falso.
Dica: Para aplicar um estilo de texto tachado usando a diretiva [ngStyle], você pode definir uma expressão que retorna um objeto com a propriedade "text-decoration" definida como "line-through" se a tarefa estiver concluída
*/
interface objetoTarefa {
  descricao: string;
  status: boolean;
}