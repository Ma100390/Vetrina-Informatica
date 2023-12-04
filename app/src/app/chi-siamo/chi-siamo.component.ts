import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from '../main-content.service';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.css']
})
export class ChiSiamoComponent implements OnInit {
  competenzeMenuWidth: number = 0;
  competenzeMenuVisible: boolean = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.competenzeMenuWidth$.subscribe((width) => {
      this.competenzeMenuWidth = width;
    });
  }

  toggleCompetenzeMenu(): void {
    this.competenzeMenuVisible = !this.competenzeMenuVisible;
  }
}

