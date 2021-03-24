import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAnalyzerState } from 'src/app/shared/interfaces/IAnalyzerState';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private displayResult = new BehaviorSubject<boolean>(false);
  displayResult$ = this.displayResult.asObservable();

  private displayTtlNutr = new BehaviorSubject<boolean>(false);
  displayTtlNutr$ = this.displayTtlNutr.asObservable();

  private analyzerResult = new BehaviorSubject<IAnalyzerState | null>(null);
  analyzerState$ = this.analyzerResult.asObservable();

  private analyzerInput = new BehaviorSubject<string>('');
  analyzerInput$ = this.analyzerInput.asObservable();

  changeAnalyzerState(state: IAnalyzerState) {
    this.analyzerResult.next(state);
  }

  changeDisplayResult(res: boolean) {
    this.displayResult.next(res);
    if (!res) {
      this.analyzerResult.next(null);
      this.displayTtlNutr.next(false);
    }
  }

  changeAnalyserInput(res: string) {
    this.analyzerInput.next(res);
  }

  changeDisplayNutrition(res: boolean): void {
    this.displayTtlNutr.next(res);
  }
}
