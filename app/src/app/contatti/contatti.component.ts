import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {
  invioMessaggioRiuscito = false;
  constructor(private http: HttpClient) {}
  
  inviaMessaggio(formData: FormData): void {
    this.http.post('http://localhost:3000/invia-email', {
      email: formData.get('email'), 
      oggetto: 'Oggetto del messaggio',
      testo: formData.get('message'),
    }).subscribe(
      data => {
        const responseData: any = data;
        console.log(responseData.message);
        console.log('Dettagli della risposta:', responseData.response);
  
        this.invioMessaggioRiuscito = true; // Imposta la variabile di stato
        setTimeout(() => {
          this.invioMessaggioRiuscito = false; // Nasconde il messaggio dopo 2 secondi
        }, 2000);
      },
      error => {
        console.error('Errore durante l\'invio del messaggio:', error);
        
        try {
          // Prova a parsare la risposta come JSON
          const errorObject = JSON.parse(error.error.text);
          console.log('Dettagli della risposta:', errorObject);
        } catch (parseError) {
          // Se il parsing fallisce, gestisci la risposta come testo
          console.log('Dettagli della risposta:', error.error.text);
        }
      }
    );
  }
  

  onSubmit(event: Event): void {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    this.inviaMessaggio(formData);
  }
}
