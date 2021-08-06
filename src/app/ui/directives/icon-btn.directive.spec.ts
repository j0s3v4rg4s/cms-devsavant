import { IconBtnDirective } from './icon-btn.directive';
import {render, screen} from '@testing-library/angular';

describe('IconBtnDirective', () => {
  it('should create an instance', async () => {
   await render('<button appIconBtn color="primary">primary</button>', {
      declarations: [IconBtnDirective]
    })

    expect(screen.getByRole('button', {name: 'primary'})).toBeTruthy()
  });
});
