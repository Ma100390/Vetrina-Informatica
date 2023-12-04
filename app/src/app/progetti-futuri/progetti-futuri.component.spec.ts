import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettiFuturiComponent } from './progetti-futuri.component';

describe('ProgettiFuturiComponent', () => {
  let component: ProgettiFuturiComponent;
  let fixture: ComponentFixture<ProgettiFuturiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgettiFuturiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgettiFuturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
