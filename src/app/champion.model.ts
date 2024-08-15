import { Ban } from "./ban.model";
import { Player } from "./player.model";

export class Champion {
    constructor(
        public id: string,
        public key: string,
        public name: string,
        public image: string,
        public assignedTo?: Player | Ban,
    ){}
}
