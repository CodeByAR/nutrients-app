import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/service/state.service';
import { AnalyzerService } from '../service/analyzer.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IAnalyzerState } from 'src/app/shared/interfaces/IAnalyzerState';

@Component({
  selector: 'app-analyzer-shell',
  templateUrl: './analyzer-shell.component.html',
  styleUrls: ['./analyzer-shell.component.scss'],
})
export class AnalyzerShellComponent implements OnInit {
  analysisData: IAnalyzerState;
  textInput: string;
  analyzerState$: Observable<IAnalyzerState>;
  displayResult$: Observable<boolean>;
  analyzerInput$: Observable<string>;
  displayTotal$: Observable<boolean>;
  constructor(
    private analyzerService: AnalyzerService,
    private state: StateService
  ) {}

  ngOnInit(): void {
    this.analyzerState$ = this.state.analyzerState$;
    this.displayResult$ = this.state.displayResult$;
    this.analyzerInput$ = this.state.analyzerInput$;
    this.displayTotal$ = this.state.displayTtlNutr$;
  }
  analyzeIngr(event: string) {
    const ingrArr = event.split('\n').filter((x) => x.trim().length > 0);
    this.analyzerService
      .analyze({ ingr: ingrArr })
      .pipe(
        tap((data: IAnalyzerState) => {
          this.state.changeAnalyzerState(data);
          this.state.changeAnalyserInput(event);
          this.state.changeDisplayResult(true);
        })
      )
      .subscribe((data) => {
        this.analysisData = data;
        console.log('data', data);
      });
  }

  clearIngredients() {
    this.state.changeDisplayResult(false);
  }

  displayTotal(): void {
    this.state.changeDisplayNutrition(true);
  }
}
