import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IIngredient } from 'src/app/shared/interfaces/IAnalyzerState';

@Component({
  selector: 'app-analyzer-summary',
  templateUrl: './analyzer-summary.component.html',
  styleUrls: ['./analyzer-summary.component.scss'],
})
export class AnalyzerSummaryComponent {
  @Input() ingredients: IIngredient[];
  @Output() back = new EventEmitter<void>();
  @Output() totalNutrition = new EventEmitter<void>();
  constructor() {}

  backClick(): void {
    this.back.emit();
  }

  displayTotal(): void {
    this.totalNutrition.emit();
  }
}
