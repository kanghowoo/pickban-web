import { Champion } from './champion.model';

/**
 *  "id" : "Aatrox",
    "key" : "266",
    "name" : "아트록스",
    "image" : "assets/img/champion/Aatrox.png"
 */
describe('Champion', () => {
  it('should create an instance', () => {
    expect(new Champion("Aatrox", "266", "아트록스", "assets/img/champion/Aatrox.png")).toBeTruthy();
  });
});
