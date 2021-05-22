import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioDeliveryComponent } from './cardapio-delivery.component';

describe('CardapioDeliveryComponent', () => {
  let component: CardapioDeliveryComponent;
  let fixture: ComponentFixture<CardapioDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
