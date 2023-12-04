// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private competenzeMenuWidthSubject = new BehaviorSubject<number>(0);
  competenzeMenuWidth$ = this.competenzeMenuWidthSubject.asObservable();

  setCompetenzeMenuWidth(width: number): void {
    this.competenzeMenuWidthSubject.next(width);
  }
  private isCardVisitaRouteSubject = new BehaviorSubject<boolean>(false);
  isCardVisitaRoute$ = this.isCardVisitaRouteSubject.asObservable();

  setCardVisitaRoute(isCardVisitaRoute: boolean): void {
    this.isCardVisitaRouteSubject.next(isCardVisitaRoute);
  }
  private isVideoRouteSubject = new BehaviorSubject<boolean>(false);
  isVideoRoute$ = this.isVideoRouteSubject.asObservable();

  setVideoRoute(isVideoRoute: boolean): void {
    this.isVideoRouteSubject.next(isVideoRoute);
  }
}
