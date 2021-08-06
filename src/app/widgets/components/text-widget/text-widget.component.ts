import {Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';
import { Editor, toHTML  } from 'ngx-editor';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-text-widget',
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.scss']
})
export class  TextWidgetComponent implements OnChanges, OnDestroy {
  @Input() text = '';
  @Input() isEdit = false;
  @Output() textChange = new EventEmitter<string>()
  @Output() deleteWidget = new EventEmitter<void>();

  editor = new Editor();
  htmlSanitizer: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {
    this.editor.valueChanges.subscribe(data => {
      const html = toHTML(data);
      this.textChange.emit(html);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    const textChange = changes['text'];
    if (textChange) {
      this.htmlSanitizer = this.sanitizer.bypassSecurityTrustHtml(textChange.currentValue)
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  delete() {
    this.deleteWidget.emit();
  }

}
