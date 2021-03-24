import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-analyzer-input',
  templateUrl: './analyzer-input.component.html',
  styleUrls: ['./analyzer-input.component.scss'],
})
export class AnalyzerInputComponent {
  @Input() ingredients: string = '';
  @Output() analyzeIngredients = new EventEmitter<string>();
  
  submitAnalyze() {
    this.analyzeIngredients.emit(this.ingredients);
  }

}
