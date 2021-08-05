import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() src = '';
  @Input() isEdit = false;
  @Output() srcChange = new EventEmitter<string>();
  @Output() deleteWidget = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  changeImage(input: EventTarget | null) {
    const file = (input as HTMLInputElement).files?.[0];
    if (file) {
      this.src = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)) as string
      this.srcChange.emit(this.src);
    }
  }

  delete() {
    this.deleteWidget.emit();
  }
}
