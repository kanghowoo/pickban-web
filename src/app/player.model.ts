import { Champion } from "./champion.model";

export class Player {
    constructor(
        public orderId: number,
        public name?: string,
        public image?: string,
        public champion?: Champion,
    ) {}
}
