import { Team } from "./team.model";

export class Match {
    constructor(
        public id: number,
        public homeTeam: Team,
        public awayTeam: Team,
        public schedule: string,
        public name: string | '',
    ) {};
}
