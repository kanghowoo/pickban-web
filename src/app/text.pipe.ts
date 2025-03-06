import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  standalone: true
})
export class TextPipe implements PipeTransform {

  transform(input: string, operation: string): string {
    switch(operation) {
      case 'replaceBrWithSpace':
        return this.replaceBrWithSpace(input);
      default:
        return input;
    }
  }

  private replaceBrWithSpace(input: string): string {
    return input.replace(/<br\s*\/?>/gi, ' ');
  }

}
