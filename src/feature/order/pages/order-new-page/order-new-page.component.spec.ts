import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNewPageComponent } from './order-new-page.component';

describe('OrderNewPageComponent', () => {
  let component: OrderNewPageComponent;
  let fixture: ComponentFixture<OrderNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderNewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
