import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StateService } from 'src/app/core/service/state.service';
import { IAnalyzeIngredients } from 'src/app/shared/interfaces/IAnalyzeIngredients';
import { AnalyzerService } from '../service/analyzer.service';

import { AnalyzerShellComponent } from './analyzer-shell.component';

describe('AnalyzerShellComponent', () => {
  let component: AnalyzerShellComponent;
  let fixture: ComponentFixture<AnalyzerShellComponent>;
  let analyzerServiceStub: Partial<AnalyzerService>;
  let aService: AnalyzerService;
  let sService: StateService;
  beforeEach(async () => {
    analyzerServiceStub = //jasmine.createSpyObj(['analyze']);
    {
      analyze: (ingr: IAnalyzeIngredients) => of(true),
    };
    await TestBed.configureTestingModule({
      declarations: [AnalyzerShellComponent],
      providers: [
        {
          provide: AnalyzerService,
          useValue: analyzerServiceStub,
        },
        {
          provide: StateService,
          useClass: StateService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerShellComponent);
    component = fixture.componentInstance;
    aService = TestBed.inject(AnalyzerService);
    sService = TestBed.inject(StateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clearIngredients', () => {
    it('should call changeDisplayResult', () => {
      spyOn(sService, 'changeDisplayResult');
      component.clearIngredients();
      expect(sService.changeDisplayResult).toHaveBeenCalled();
    });
    it('should call changeDisplayResult with false', () => {
      spyOn(sService, 'changeDisplayResult');
      component.clearIngredients();
      expect(sService.changeDisplayResult).toHaveBeenCalledWith(false);
    });
  });

  describe('displayTotal', () => {
    it('should call changeDisplayNutrition', () => {
      spyOn(sService, 'changeDisplayNutrition');
      component.displayTotal();
      expect(sService.changeDisplayNutrition).toHaveBeenCalled();
    });
    it('should call changeDisplayNutrition with true', () => {
      spyOn(sService, 'changeDisplayNutrition');
      component.displayTotal();
      expect(sService.changeDisplayNutrition).toHaveBeenCalledOnceWith(true);
    });
  });

  describe('analyzeIngr', () => {
    it('should call analyze method of AnalyzerService', () => {
      let inputStr = '1 cup rice';
      spyOn(aService,'analyze').and.returnValue(of(true));
      component.analyzeIngr(inputStr);
      expect(aService.analyze).toHaveBeenCalled();
    });
  });
});
