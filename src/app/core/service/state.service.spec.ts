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
      expect(service).toBeTruthy();
    });
  });
  describe('changeDisplayResult', () => {
    it('should call displayResult.next', () => {
      service.changeDisplayResult(true);
      expect(service).toBeTruthy();
    });
    it('should call analyzerResult.next when false', () => {
      service.changeDisplayResult(false);
      expect(service).toBeTruthy();
    });
    it('should call displayTtlNutr.next when false', () => {
      service.changeDisplayResult(false);
      expect(service).toBeTruthy();
    });
  });
  describe('changeAnalyserInput', () => {
    it('should call analyzerInput.next', () => {
      service.changeAnalyserInput(null);
      expect(service).toBeTruthy();
    });
  });
  describe('changeDisplayNutrition', () => {
    it('should call displayTtlNutr.next', () => {
      service.changeDisplayNutrition(false);
      expect(service).toBeTruthy();
    });
  });
});
