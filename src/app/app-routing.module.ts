import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ShellComponent } from './home/shell/shell.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'analyzer',
        loadChildren: () =>
          import('./analyzer/analyzer.module').then(
            (mod) => mod.AnalyzerModule
          ),
      },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
