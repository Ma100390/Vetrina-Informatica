import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { SharedService } from './main-content.service';
import { Router, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild('mainContent') mainContent!: ElementRef;
  isCardVisitaRoute$ = this.sharedService.isCardVisitaRoute$;
  isVideoRoute$ = this.sharedService.isVideoRoute$;

  constructor(private sharedService: SharedService, private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.spinner.hide();
    }, 3500); // Nascondi lo spinner dopo 2 secondi
    this.setCompetenzeMenuWidth();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isCardVisitaRoute = event.url === '/card-visita';
        const isVideoRoute = event.url === '/video';
        this.sharedService.setCardVisitaRoute(isCardVisitaRoute);
        this.sharedService.setVideoRoute(isVideoRoute);
      }
    });
  }

  onResize(event: Event): void {
    this.setCompetenzeMenuWidth();
  }

  private setCompetenzeMenuWidth(): void {
    const mainContentElement = this.mainContent.nativeElement;
    const mainContentWidth = mainContentElement.offsetWidth;
    this.sharedService.setCompetenzeMenuWidth(mainContentWidth);
  }
}
