import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnChanges {
  @Input() color: 'primary' | 'secondary' | 'error' | '' = '';

  constructor(private el: ElementRef<HTMLButtonElement>, private renderer: Renderer2) {
    this.renderer.addClass(el.nativeElement, 'button')
  }

  ngOnChanges(changes: SimpleChanges): void {
    const colorChange = changes['color'];
    if (!!colorChange.previousValue) {
      this.renderer.removeClass(this.el.nativeElement, `button--${colorChange.previousValue}`)
    }
    this.renderer.addClass(this.el.nativeElement, `button--${colorChange.currentValue}`)
  }





}
