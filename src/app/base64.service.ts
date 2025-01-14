import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Base64Service {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  // Base64 인코딩
  encode(str: string): string {
    if (isPlatformBrowser(this.platformId)) {
      // 브라우저 환경
      return btoa(str);
    } else {
      // Node.js 환경 (Buffer 대신 Buffer 호환 기능 사용)
      const encoder = new TextEncoder();
      const uint8Array = encoder.encode(str);
      return this.arrayBufferToBase64(uint8Array.buffer);
    }
  }

  // Base64 인코딩 (패딩 제거)
  encodeNoPadding(str: string): string {
    return this.encode(str).split('=')[0];
  }

  // Base64 디코딩
  decode(str: string): string {
    if (isPlatformBrowser(this.platformId)) {
      // 브라우저 환경
      return atob(str);
    } else {
      // Node.js 환경
      const binaryString = this.base64ToArrayBuffer(str);
      const decoder = new TextDecoder();
      return decoder.decode(binaryString);
    }
  }

  // Helper: ArrayBuffer -> Base64
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Helper: Base64 -> ArrayBuffer
  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
