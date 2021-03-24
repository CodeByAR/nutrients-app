import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-analyzer-input',
  templateUrl: './analyzer-input.component.html',
  styleUrls: ['./analyzer-input.component.scss'],
})
export class AnalyzerInputComponent {
  ingredients: string = '';
  @Output() analyzeIngredients = new EventEmitter<string>();

  
  submitAnalyze() {
    // console.log(this.ingredients);
    this.analyzeIngredients.emit(this.ingredients);
  }

}
