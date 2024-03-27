import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaInterComponent } from './logistica-inter.component';

describe('LogisticaInterComponent', () => {
  let component: LogisticaInterComponent;
  let fixture: ComponentFixture<LogisticaInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogisticaInterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticaInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
