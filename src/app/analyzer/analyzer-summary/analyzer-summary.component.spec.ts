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
});
