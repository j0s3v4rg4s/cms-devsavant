import { ImageComponent } from './image.component';
import {fireEvent, render, screen} from '@testing-library/angular';

describe('ImageComponent', () => {

  global.URL.createObjectURL = jest.fn().mockReturnValue('testUrl');

  it('should create', async () => {
    await render(ImageComponent)
    expect(screen.getByText(/person/i)).toBeInTheDocument()
  });

  it('should show a image', async () => {
    await render(ImageComponent, {
      componentProperties: {
        src: 'https://picsum.photos/700/400?random'
      }
    })
    expect(screen.getByRole('img', {  name: /avatar/i})).toBeInTheDocument()
  });

  it('should show a remove button on edit mode', async () => {
    await render(ImageComponent, {
      componentProperties: {
        src: 'https://picsum.photos/700/400?random',
        isEdit: true
      }
    })
    expect(screen.queryByText(/close/i)).toBeInTheDocument()
  });

  it('should send url event after select a file', async () => {
    const sendValue = jest.fn();
    await render(ImageComponent, {
      componentProperties: {
        isEdit: true,
        srcChange: {
          emit: sendValue
        } as any
      }
    })

    const input = screen.getByLabelText(/person/i);
    fireEvent.change(input, {
      target: {
        files: [new File(['(⌐□_□)'], 'test.png', {type: 'image/png'})],
      },
    })

    expect(sendValue).toHaveBeenCalledWith({changingThisBreaksApplicationSecurity: 'testUrl'})
  });

  it('should send remove event after click remove button', async () => {
    const sendValue = jest.fn();
    await render(ImageComponent, {
      componentProperties: {
        isEdit: true,
        deleteWidget: {
          emit: sendValue
        } as any
      }
    })

    const closeButton = screen.getByRole('button', {  name: /close/i})
    fireEvent.click(closeButton);

    expect(sendValue).toHaveBeenCalled()
  });
});
