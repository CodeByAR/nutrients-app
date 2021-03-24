import { NgModule } from '@angular/core';
import { AnalyzerRoutingModule } from './analyzer-routing.module';
import { AnalyzerShellComponent } from './analyzer-shell/analyzer-shell.component';
import { AnalyzerInputComponent } from './analyzer-input/analyzer-input.component';
import { AnalyzerSummaryComponent } from './analyzer-summary/analyzer-summary.component';
import { AnalyzerNutritionListComponent } from './analyzer-nutrition-list/analyzer-nutrition-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AnalyzerShellComponent, AnalyzerInputComponent, AnalyzerSummaryComponent, AnalyzerNutritionListComponent],
  imports: [CommonModule ,AnalyzerRoutingModule, FormsModule],
})
export class AnalyzerModule {}
