import {AppComponent} from './app.component';
import {fireEvent, render, screen} from '@testing-library/angular';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {

  it('should be on view mode', async () => {
    await render(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    expect(screen.getByRole('heading', {  name: /read mode/i})).toBeInTheDocument()
  });

  it('should change to edit mode', async () => {
    await render(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    fireEvent.click(screen.getByRole('button', {  name: /edit/i}))
    expect(screen.getByRole('heading', {  name: /edit mode/i})).toBeInTheDocument()
  });

  it('should go back to view mode', async () => {
    await render(AppComponent, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    fireEvent.click(screen.getByRole('button', {  name: /edit/i}))
    fireEvent.click(screen.getByRole('button', {  name: /cancel/i}))

    expect(screen.getByRole('heading', {  name: /read mode/i})).toBeInTheDocument()
  });

});
