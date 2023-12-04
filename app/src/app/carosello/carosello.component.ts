import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.css']
})
export class CaroselloComponent implements AfterViewInit {
  currentIndex = 0;
  cardWidth: number = 0 ;
  carouselContainerWidth: number=0;
  cards = [
    { content: "Come creare una Vetrina web? Offriamo consulenza per guidarti nella creazione di una vetrina online che si adatti alle tue esigenze specifiche.", isVisible: false,imagePath: 'assets/icone/1negozio.png' },
    { content: "Vetrina interattiva: Implementiamo elementi dinamici per coinvolgere i visitatori, come gallerie di immagini interattive o strumenti di personalizzazione.", isVisible: true ,imagePath: 'assets/icone/2puzzle.png'},
    { content: "Responsive design: Assicuriamo che il sito sia ottimizzato per una visualizzazione impeccabile su dispositivi di diverse dimensioni.", isVisible: false,imagePath: 'assets/icone/3dispositivi.png' },
    { content: "Il contenuto della tua Vetrina? Offriamo servizi video professionali per mettere in evidenza al meglio ciò che desideri esporre.", isVisible: false,imagePath: 'assets/icone/4tavolozza.png' },
    { content: "Cosa Mettere in Vetrina? Ti aiutiamo a selezionare e presentare i tuoi prodotti o servizi in modo accattivante e persuasivo.", isVisible: false,imagePath: 'assets/icone/5prezzo.png' },
    { content: "Vetrina web: Colleghiamo la tua vetrina online ai tuoi profili sui social media per aumentare la visibilità e l'interazione.", isVisible: false ,imagePath: 'assets/icone/6catena.png'},
    { content: "SEO Integrato: Massimizziamo la visibilità del tuo sito sui motori di ricerca per raggiungere un pubblico più ampio.", isVisible: false ,imagePath: 'assets/icone/7torcia.png'},
    { content: "Sviluppo Professionale: Creiamo siti vetrina professionali e accattivanti per presentare al meglio la tua attività.", isVisible: false ,imagePath: 'assets/icone/8-gear.gif'},
    { content: "Design Intuitivo: Creiamo esperienze utente raffinate e facili da navigare per impressionare i tuoi visitatori.", isVisible: false ,imagePath: 'assets/icone/9-mouse.gif'},
    { content: "Personalizzazione Totale: Ogni sito è un'opera d'arte progettata per rispecchiare la tua identità aziendale.", isVisible: false,imagePath: 'assets/icone/10-libro.gif' },
    { content: "Assistenza Continua: Garantiamo un supporto costante e manutenzione post-lancio per la tua tranquillità.", isVisible: false ,imagePath: 'assets/icone/11-assistenza.gif'},
    { content: "Vetrina Commerciale: Implementiamo sistemi efficaci di gestione dell'inventario per una vetrina commerciale efficiente.", isVisible: false ,imagePath: 'assets/icone/12-magazzino.gif'}
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    // Ottenere la larghezza del contenitore carousel
    const carouselContainer = this.el.nativeElement.querySelector('.carousel-container');
    this.carouselContainerWidth = carouselContainer.clientWidth;
  
    // Calcolare la larghezza della card dopo che la vista è stata renderizzata
    this.calculateCardWidth();
    // Log della larghezza della card
    console.log('Card Width:', this.cardWidth);
  
    // Log del contenitore carousel
    console.log('Carousel Container Width:', this.carouselContainerWidth);
  
    // Log dello stato delle card
    console.log('Cards:', this.cards);
  }

  calculateCardWidth() {
    const cardElements: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.card');
    
    if (cardElements.length > 0) {
      // Calcola la larghezza media delle carte in percentuale
      let totalWidth = 0;
  
      cardElements.forEach((cardElement: HTMLElement) => {
        // Usa la percentuale per calcolare la larghezza
        totalWidth += (cardElement.clientWidth / this.carouselContainerWidth) * 100;
      });
  
      this.cardWidth = totalWidth / cardElements.length;
    } else {
      console.error('No card elements found. Setting cardWidth to a default value.');
      this.cardWidth = 10; // Imposta un valore di larghezza predefinito in percentuale
    }
  }
  formatCardContent(card: string): string {
    const openingTag = '<strong>';
    const closingTag = '</strong>';
    const targetPunctuation = ['?', ':'];
  
    let formattedCard = card;
  
    for (const punctuation of targetPunctuation) {
      const parts = formattedCard.split(punctuation);
      formattedCard = parts.map((part, index) => {
        if (index < parts.length - 1) {
          return `${openingTag}${part.trim()}${punctuation}${closingTag}`;
        }
        return part;
      }).join('');
    }
  
    return formattedCard;
  }
  
  prevSlide() {
    // Imposta isVisible a false per la card corrente
    this.cards[this.currentIndex].isVisible = false;
  
    // Calcola l'indice della card precedente
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  
    // Imposta isVisible a true per la nuova card corrente
    this.cards[this.currentIndex].isVisible = true;
  }
  
  nextSlide() {
    // Imposta isVisible a false per la card corrente
    this.cards[this.currentIndex].isVisible = false;
  
    // Calcola l'indice della card successiva
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  
    // Imposta isVisible a true per la nuova card corrente
    this.cards[this.currentIndex].isVisible = true;
  }
}