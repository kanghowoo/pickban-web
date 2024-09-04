import { Team } from "./team.model";

export class Match {
    constructor(
        public id: number,
        public home: Team,
        public away: Team,
        public schedule: string,
        public name: string,
    ) {};
}
