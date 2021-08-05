import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { TextWidgetComponent } from './components/text-widget/text-widget.component';
import {NgxEditorModule} from 'ngx-editor';
import {FormsModule} from '@angular/forms';
import {UiModule} from '../ui/ui.module';
import { HelloWidgetComponent } from './components/hello-widget/hello-widget.component';



@NgModule({
  declarations: [
    ImageComponent,
    TextWidgetComponent,
    HelloWidgetComponent
  ],
  imports: [
    CommonModule,
    NgxEditorModule.forChild({}),
    FormsModule,
    UiModule
  ],
  exports: [
    ImageComponent,
    TextWidgetComponent,
    HelloWidgetComponent
  ]
})
export class WidgetsModule { }
