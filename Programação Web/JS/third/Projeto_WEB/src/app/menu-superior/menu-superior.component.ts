import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css'
})
export class MenuSuperiorComponent {
  public num1: any;
  public num2: any;
  public num3: string = "";
  public result: any;

  btnEnviar() {
    switch (this.num3) {
      case "+":
        this.result = parseFloat(this.num1) + parseFloat(this.num2);
        break;
      case "-":
        this.result = parseFloat(this.num1) - parseFloat(this.num2);
        break;
      case "*":
        this.result = parseFloat(this.num1) * parseFloat(this.num2);
        break;
      case "/":
        this.result = parseFloat(this.num1) / parseFloat(this.num2);
        break;
      case "%":
        this.result = parseFloat(this.num1) % parseFloat(this.num2);
        break;
      default:

        break;
    }
  }
}
