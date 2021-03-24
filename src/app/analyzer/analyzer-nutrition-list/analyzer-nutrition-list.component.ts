import { Component, Input, OnInit } from '@angular/core';
import { ITotalDaily } from 'src/app/shared/interfaces/IAnalyzerState';

@Component({
  selector: 'app-analyzer-nutrition-list',
  templateUrl: './analyzer-nutrition-list.component.html',
  styleUrls: ['./analyzer-nutrition-list.component.scss'],
})
export class AnalyzerNutritionListComponent implements OnInit {
  objectKeys = Object.keys;
  @Input() totalDaily: ITotalDaily;
  constructor() {}

  ngOnInit(): void {}
}
