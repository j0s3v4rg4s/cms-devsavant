import { EditModeComponent } from './edit-mode.component';
import {render, screen, fireEvent} from '@testing-library/angular';
import {ImageComponent} from '../../widgets/components/image/image.component';
import {HelloWidgetComponent} from '../../widgets/components/hello-widget/hello-widget.component';
import {TextWidgetComponent} from '../../widgets/components/text-widget/text-widget.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('EditModeComponent', () => {

  it('should add a image', async () => {
    await render(EditModeComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      declarations: [ImageComponent, HelloWidgetComponent],
      imports: [ReactiveFormsModule, FormsModule],
      componentProperties: {
        widgets: []
      },
    })

    const imageButton = screen.getByRole('button', {  name: /add image/i})
    fireEvent.click(imageButton);
    expect(screen.getByText(/person/i)).toBeInTheDocument()
  });

  it('should add a hello message', async () => {
    await render(EditModeComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ImageComponent, HelloWidgetComponent, TextWidgetComponent],
      imports: [ReactiveFormsModule, FormsModule],
      componentProperties: {
        widgets: []
      },
    })

    const helloButton = screen.getByRole('button', {  name: /add hello/i});
    fireEvent.click(helloButton);
    expect(screen.getByText(  /User name/)).toBeInTheDocument()
  });

  it('should add a text box', async () => {
    const {container} = await render(EditModeComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ImageComponent, HelloWidgetComponent, TextWidgetComponent],
      imports: [ReactiveFormsModule, FormsModule],
      componentProperties: {
        widgets: []
      },
    })

    const helloButton = screen.getByRole('button', {  name: /add text/i});
    fireEvent.click(helloButton);
    expect(container.querySelector('app-text-widget')).toBeInTheDocument()
  });
});
