import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApoliceComponent } from './apolice/apolice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApoliceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular';
}
