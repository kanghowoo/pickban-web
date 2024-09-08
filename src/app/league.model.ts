import { Team } from "./team.model";

export interface League {
    id: number;
    slug: string;
    fullName: string;
    teams: Team[];
}
