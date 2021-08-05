import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnDirective } from './directives/btn.directive';
import { IconBtnDirective } from './directives/icon-btn.directive';

@NgModule({
  declarations: [
    BtnDirective,
    IconBtnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtnDirective,
    IconBtnDirective
  ]
})
export class UiModule { }
