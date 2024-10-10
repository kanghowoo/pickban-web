import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

@Pipe({
  name: 'schedule',
  standalone: true
})
export class DatePipe implements PipeTransform {

  transform(dateTime: string): string {
    return format(new Date(dateTime), "MM월 dd일 (eee) HH:mm", { locale: ko});
  }

}
