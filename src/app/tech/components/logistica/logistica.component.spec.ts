import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaComponent } from './logistica.component';

describe('LogisticaComponent', () => {
  let component: LogisticaComponent;
  let fixture: ComponentFixture<LogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogisticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
