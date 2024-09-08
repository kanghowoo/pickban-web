import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logoPath',
  standalone: true
})
export class LogoPathPipe implements PipeTransform {

  transform(slug: string, type: 'league' | 'team'): string {
    const LOGO_PATH: string = 'assets/img/logo/';

    switch (type) {
      case 'league':
        return `${LOGO_PATH}/${type}/${slug}.png`;
      case 'team':
        return `${LOGO_PATH}/${type}/${slug}.png`;
      default:
        return ``;
    }
  }

}
