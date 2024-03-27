import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenajeComponent } from './almacenaje.component';

describe('AlmacenajeComponent', () => {
  let component: AlmacenajeComponent;
  let fixture: ComponentFixture<AlmacenajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmacenajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmacenajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
