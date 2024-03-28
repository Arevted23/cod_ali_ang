import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogissolutionsComponent } from './logissolutions.component';

describe('LogissolutionsComponent', () => {
  let component: LogissolutionsComponent;
  let fixture: ComponentFixture<LogissolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogissolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogissolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
