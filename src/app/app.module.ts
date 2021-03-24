import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './home/shell/shell.component';
import { MenuComponent } from './home/menu/menu.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    MenuComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
