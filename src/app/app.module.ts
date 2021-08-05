import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxEditorModule} from 'ngx-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { EditModeComponent } from './components/edit-mode/edit-mode.component';
import {WidgetsModule} from './widgets/widgets.module';
import { ViewModeComponent } from './components/view-mode/view-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    EditModeComponent,
    ViewModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    WidgetsModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
