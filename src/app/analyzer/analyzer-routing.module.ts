import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzerShellComponent } from './analyzer-shell/analyzer-shell.component';

const routes: Routes = [{ path: '', component: AnalyzerShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyzerRoutingModule {}
