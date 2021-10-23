import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartchildComponent } from './cartchild.component';

describe('CartchildComponent', () => {
  let component: CartchildComponent;
  let fixture: ComponentFixture<CartchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
