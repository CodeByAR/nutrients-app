import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('changeAnalyzerState', () => {
    it('should call analyzerResult.next', () => {
      service.changeAnalyzerState(null);
    });
  });
  describe('changeDisplayResult', () => {
    it('should call displayResult.next', () => {
      service.changeDisplayResult(true);
    });
    it('should call analyzerResult.next when false', () => {
      service.changeDisplayResult(false);
    });
    it('should call displayTtlNutr.next when false', () => {
      service.changeDisplayResult(false);
    });
  });
  describe('changeAnalyserInput', () => {
    it('should call analyzerInput.next', () => {
      service.changeAnalyserInput(null);
    });
  });
  describe('changeDisplayNutrition', () => {
    it('should call displayTtlNutr.next', () => {
      service.changeDisplayNutrition(false);
    });
  });
});
