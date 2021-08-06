import { TextWidgetComponent } from './text-widget.component';
import {NgxEditorModule} from 'ngx-editor';
import {render, screen} from '@testing-library/angular';
import {FormsModule} from '@angular/forms';

describe('TextWidgetComponent', () => {
  it('should have a remove bottom', async () => {
    await render(TextWidgetComponent, {
      componentProperties: {
        isEdit: true
      },
      imports: [NgxEditorModule, FormsModule]
    })

    expect(screen.getByRole('button', {name: /close/})).toBeTruthy()
  })
});
