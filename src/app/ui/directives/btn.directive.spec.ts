import { BtnDirective } from './btn.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  template: '<button appBtn color="primary">primary</button>'
})
class TestComponent{}

describe('BtnDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, BtnDirective]
    }).createComponent(TestComponent)
    fixture.detectChanges();
  })
  it('should create an instance', () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.className).toEqual('button button--primary')
  });
});
