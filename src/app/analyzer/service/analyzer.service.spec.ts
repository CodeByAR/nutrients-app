import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AnalyzerService } from './analyzer.service';

describe('AnalyzerService', () => {
  let service: AnalyzerService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AnalyzerService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('analyze', () => {
    it('should call http get', () => {
      service.analyze(null);
      expect(httpClientSpy.get).toHaveBeenCalled();
    });
  });
});
