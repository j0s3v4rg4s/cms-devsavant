import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HelloWidget, ImgWidget, TextWidget, Widgets, WidgetType} from '../../widgets/interfaces/widget';

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent {
  @Input() widgets: Widgets[] = []
  @Output() saveWidgets = new EventEmitter<Widgets[]>();

  readonly widgetTypes = WidgetType;

  addImageWidget() {
    const imgWidget: ImgWidget = {
      type: WidgetType.IMG,
      src: ''
    }
    this.widgets = [...this.widgets, imgWidget]
  }

  addTextWidget() {
    const textWidget: TextWidget = {
      type: WidgetType.TEXT,
      text: ''
    }
    this.widgets = [...this.widgets, textWidget]
  }

  addHelloWidget() {
    const helloWidget: HelloWidget = {
      type: WidgetType.HELLO
    }
    this.widgets = [...this.widgets, helloWidget]
  }

  save() {
    this.saveWidgets.emit(this.widgets)
  }

  removeWidget(i: number) {
    this.widgets = this.widgets.filter((w, index) => index !== i)
  }
}
