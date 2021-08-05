import { Component } from '@angular/core';
import {Widgets} from './widgets/interfaces/widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isEditMode = false;
  widgets: Widgets[] = []

  openEditMode() {
    this.isEditMode = true;
  }

  closeEditMode() {
    this.isEditMode = false;
  }

  saveData(widgets: Widgets[]) {
    this.closeEditMode();
    this.widgets = widgets;
  }
}
