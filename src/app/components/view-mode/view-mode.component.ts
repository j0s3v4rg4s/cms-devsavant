import { Component, Input } from '@angular/core';
import { Widgets, WidgetType } from '../../widgets/interfaces/widget';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.scss']
})
export class ViewModeComponent {
  @Input() widgets: Widgets[] = []
  userName = 'Jose Vargas'

  readonly widgetTypes = WidgetType;

}
