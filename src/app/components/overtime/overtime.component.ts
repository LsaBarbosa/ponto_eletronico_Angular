import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-overtime',
  standalone: true,
    imports: [
        ButtonComponent,
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './overtime.component.html',
  styleUrl: './overtime.component.css'
})
export class OvertimeComponent {
  username: string = '';
  startDate: string = '';
  endDate: string = '';
  searchOvertime() {

    console.log('Username:', this.username);
    console.log('startDate:', this.startDate);
    console.log('endDate:', this.endDate);
    if (this.username === 'admin' && this.startDate === 'admin123') {
      console.log('Login bem-sucedido!');
    } else {
      console.log('Credenciais inválidas. Tente novamente.');

    }
  }
}