import { render, screen } from '@testing-library/angular';
import { IconBtnDirective } from './icon-btn.directive';

describe('IconBtnDirective', () => {
  it('should create an instance',async () => {
    await render('<button appIconBtn color="primary">Btn</button>', {
      declarations: [IconBtnDirective]
    })
    const element = screen.getByText(/Btn/i)

    expect(element).toBeInTheDocument();
    expect(element.classList.value).toEqual('icon-button icon-button--primary');
  });
});
