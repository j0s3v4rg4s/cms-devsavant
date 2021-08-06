import {TextWidgetComponent} from './text-widget.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('TextWidgetComponent', () => {

  let component: TextWidgetComponent;
  let fixture: ComponentFixture<TextWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWidgetComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TextWidgetComponent);
    component = fixture.componentInstance;
    component.isEdit = true;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should show a remove button on edit mode', async () => {
    const element: HTMLElement = fixture.nativeElement;
    const button =  element.querySelector('button')
    expect(button).toBeTruthy();
  });

});
