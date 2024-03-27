import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoredlogisticoComponent } from './codigoredlogistico.component';

describe('CodigoredlogisticoComponent', () => {
  let component: CodigoredlogisticoComponent;
  let fixture: ComponentFixture<CodigoredlogisticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigoredlogisticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodigoredlogisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
