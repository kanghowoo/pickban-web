import { Champion } from "./champion.model";

export class Ban {
    constructor(
        public pickBanSeq: number,
        public champion?: Champion,
    ) {}
}
