import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVisitaComponent } from './card-visita.component';

describe('CardVisitaComponent', () => {
  let component: CardVisitaComponent;
  let fixture: ComponentFixture<CardVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVisitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
