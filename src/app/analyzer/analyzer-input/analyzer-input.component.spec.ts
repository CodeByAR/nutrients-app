import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerInputComponent } from './analyzer-input.component';

describe('AnalyzerInputComponent', () => {
  let component: AnalyzerInputComponent;
  let fixture: ComponentFixture<AnalyzerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyzerInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('submitAnalyze', () => {
    it('should emit ingredients event', () => {
      spyOn(component.analyzeIngredients, 'emit');

      component.submitAnalyze();

      expect(component.analyzeIngredients.emit).toHaveBeenCalled();

    })
  })
});
