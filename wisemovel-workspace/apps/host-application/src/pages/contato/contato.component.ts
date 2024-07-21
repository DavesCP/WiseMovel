import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {

  sendMessage(event: Event): void {
    event.preventDefault();
    const message = (event.target as HTMLFormElement).querySelector('textarea')?.value;
    if (message) {
      console.log('Mensagem enviada:', message);
      alert('Sua mensagem foi enviada com sucesso!');
      (event.target as HTMLFormElement).reset(); // Limpa o formulário após o envio
    } else {
      alert('Por favor, digite uma mensagem antes de enviar.');
    }
  }
}
