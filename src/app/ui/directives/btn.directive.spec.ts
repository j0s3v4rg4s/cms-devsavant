import { render, screen } from '@testing-library/angular';
import { BtnDirective } from './btn.directive';

describe('BtnDirective', () => {
  it('should create an instance', async () => {
    await render(' <button appBtn color="primary">Btn</button>', {
      declarations: [BtnDirective]
    });
    const element = screen.getByText(/Btn/i)

    expect(element).toBeInTheDocument();
    expect(element.classList.value).toEqual('button button--primary')
  });
});
