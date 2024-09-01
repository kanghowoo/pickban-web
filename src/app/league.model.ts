import { Team } from "./team.model";

export interface League {
    id: number;
    keyName: string;
    fullName: string;
    teams: Team[];
}
