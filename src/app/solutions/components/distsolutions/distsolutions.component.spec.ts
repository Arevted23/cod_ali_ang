import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistsolutionsComponent } from './distsolutions.component';

describe('DistsolutionsComponent', () => {
  let component: DistsolutionsComponent;
  let fixture: ComponentFixture<DistsolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistsolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
