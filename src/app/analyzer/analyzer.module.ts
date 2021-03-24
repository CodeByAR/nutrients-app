import { NgModule } from '@angular/core';
import { AnalyzerRoutingModule } from './analyzer-routing.module';
import { AnalyzerShellComponent } from './analyzer-shell/analyzer-shell.component';

@NgModule({
  declarations: [AnalyzerShellComponent],
  imports: [AnalyzerRoutingModule],
})
export class AnalyzerModule {}
