import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logoPath',
  standalone: true,
})
export class LogoPathPipe implements PipeTransform {
  transform(slug: string, type: 'league' | 'team'): string {
    const LOGO_PATH: string = 'assets/img/logo';

    // 1. slug가 빈 문자열인 경우 빈 문자열 반환
    if (!slug) return '';

    // 2. 한글 자소 분리(NFD) 방지 및 URL 인코딩 처리
    // - normalize('NFC'): Mac에서 한글이 'ㅎ+ㅏ+ㄴ'으로 분리되는 것을 '한'으로 합침
    // - encodeURIComponent: 한글을 URL 안전 문자(%ED%95%9C...)로 변환하여 'URI malformed' 에러 원천 차단
    const safeSlug = encodeURIComponent(slug.normalize('NFC'));

    switch (type) {
      case 'league':
        return `${LOGO_PATH}/${type}/${safeSlug}.png`;
      case 'team':
        return `${LOGO_PATH}/${type}/${safeSlug}.png`;
      default:
        return '';
    }
  }
}
