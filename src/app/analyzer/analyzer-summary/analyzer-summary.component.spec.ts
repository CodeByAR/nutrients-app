import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerSummaryComponent } from './analyzer-summary.component';

describe('AnalyzerSummaryComponent', () => {
  let component: AnalyzerSummaryComponent;
  let fixture: ComponentFixture<AnalyzerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzerSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('backClick', () => {
    it('should emit event', () => {
      spyOn(component.back, 'emit');
      component.backClick();
      expect(component.back.emit).toHaveBeenCalled();
    })
  })

  describe('displayTotal', () => {
    it('should emit event', () => {
      spyOn(component.totalNutrition, 'emit');
      component.displayTotal();
      expect(component.totalNutrition.emit).toHaveBeenCalled();
    })
  })
});
