import { render, screen } from '@testing-library/angular';

import { HelloWidgetComponent } from './hello-widget.component';

describe('HelloWidgetComponent', () => {

  it('should create', async () => {
    await render(HelloWidgetComponent, {
      componentProperties: {
        userName: 'testName'
      }
    });

    expect(screen.getByText(/testName/i)).toBeInTheDocument()
  });

  it('should show remove button on edit mode', async () => {
    await render(HelloWidgetComponent, {
      componentProperties: {
        userName: 'testName',
        isEdit: true
      }
    });

    expect(screen.queryByText(/close/i)).toBeInTheDocument()
  })

  it('should not show remove button on read mode', async () => {
    await render(HelloWidgetComponent, {
      componentProperties: {
        userName: 'testName',
        isEdit: false
      }
    });
    expect(screen.queryByText(/close/i)).not.toBeInTheDocument()
  })
});
