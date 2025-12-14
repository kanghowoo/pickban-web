import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideMissing]',
  standalone: true,
})
export class HideMissingDirective {
  constructor(private el: ElementRef<HTMLImageElement>) {}

  @HostListener('error')
  onError() {
    // this.el.nativeElement.style.display = 'none';
    this.el.nativeElement.style.visibility = 'hidden';
  }
}
