import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerNutritionListComponent } from './analyzer-nutrition-list.component';

describe('AnalyzerNutritionListComponent', () => {
  let component: AnalyzerNutritionListComponent;
  let fixture: ComponentFixture<AnalyzerNutritionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzerNutritionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerNutritionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
