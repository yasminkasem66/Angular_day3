import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartparentComponent } from './cartparent.component';

describe('CartparentComponent', () => {
  let component: CartparentComponent;
  let fixture: ComponentFixture<CartparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
