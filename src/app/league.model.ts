import { Team } from "./team.model";

export interface League {
    id: number;
    keyName: string;
    fullName: string;
    logo: string;
    teams: Team[];
}
