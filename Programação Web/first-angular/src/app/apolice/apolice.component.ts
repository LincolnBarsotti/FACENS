import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  nomeDoSegurado:string = "";
  sexo:string = "";
  idade:number = 0;
  valorDoAutomovel:any; 
  resultado:number = 0;
  conta = true;

  calcular(){
    if(this.sexo == "masculino" && this.idade <= 25){
      this.resultado = parseFloat(this.valorDoAutomovel) * 0.15;
      this.conta = false;
    }else if(this.sexo == "masculino" && this.idade > 25){
      this.resultado = parseFloat(this.valorDoAutomovel) * 0.1;
    }else if(this.sexo == "feminino"){
      this.resultado = parseFloat(this.valorDoAutomovel) * 0.08;
    }
  }
}
