import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-error-handler',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css'
})
export class ErrorHandlerComponent implements OnChanges, OnDestroy {
  @Input() error: HttpErrorResponse | null = null;
  @Input() action: string = '';
  registerFailure: boolean = false;
  errorMessageTimeout: any;
  errorMessage: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['error'] && this.error) {
      this.registerFailure = true;
      this.errorMessage = this.getErrorMessage(this.error, this.action);
      this.resetErrorMessage();
    }
  }

  getErrorMessage(error: HttpErrorResponse, action: string): string {
    if (action === 'error') {
      switch (error.status) {
        case 404:
          return `Colaborador não cadastrado`;
        case 400:
          return 'Preencha todos os campos corretamente';
        case 403:
          return 'Usuário sem permissão';
        default:
          return `Falha ao realizar ${action}`;
      }
    } else if (action === 'errorCheckin') {
      switch (error.status) {
        case 404:
          return `Colaborador não cadastrado`;
        case 400:
          return 'Finalize o registro de entrada aberto';
        case 403:
          return 'Usuário sem permissão';
        default:
          return `Falha ao realizar ${action}`;
      }
    } else if (action === 'errorCheckout') {
      switch (error.status) {
        case 404:
          return `Colaborador não cadastrado`;
        case 400:
          return 'Não há o registro de entrada aberto';
        case 403:
          return 'Usuário sem permissão';
        default:
          return `Falha ao realizar ${action}`;
      }
    }else if (action === 'login') {
      switch (error.status) {
        case 404:
          return `Colaborador não cadastrado`;
        case 400:
          return 'Usuário ou Senha inválidos';
        case 403:
          return 'Usuário sem permissão';
        default:
          return `Falha ao realizar ${action}`;
      }
    }else if (action === 'create') {
      switch (error.status) {
        case 404:
          return `Colaborador não cadastrado`;
        case 400:
          return 'Colaborador já cadastrado';
        case 403:
          return 'Usuário sem permissão';
        default:
          return `Falha ao realizar ${action}`;
      }
    } else {
      return `Erro no servidor ${action}`;
    }
  }


  resetErrorMessage() {
    if (this.errorMessageTimeout) {
      clearTimeout(this.errorMessageTimeout);
    }
    this.errorMessageTimeout = setTimeout(() => {
      this.registerFailure = false;
      this.errorMessage = '';
    }, 2000); // Tempo em milissegundos (2 segundos)
  }

  ngOnDestroy() {
    if (this.errorMessageTimeout) {
      clearTimeout(this.errorMessageTimeout);
    }
  }
}
