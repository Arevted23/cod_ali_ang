import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmsolutionsComponent } from './almsolutions.component';

describe('AlmsolutionsComponent', () => {
  let component: AlmsolutionsComponent;
  let fixture: ComponentFixture<AlmsolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlmsolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlmsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
