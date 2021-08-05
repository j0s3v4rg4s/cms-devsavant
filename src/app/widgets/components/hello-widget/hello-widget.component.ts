import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hello-widget',
  templateUrl: './hello-widget.component.html',
  styleUrls: ['./hello-widget.component.scss']
})
export class HelloWidgetComponent {
  @Input() isEdit = false;
  @Input() userName = '';
  @Output() deleteWidget = new EventEmitter<void>();

  date = new Date();

  delete() {
    this.deleteWidget.emit()
  }
}
