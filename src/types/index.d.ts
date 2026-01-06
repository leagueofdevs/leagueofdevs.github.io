export interface Team {
  name: string;
  members: Array<string>;
  acronym: string;
  logoUrl?: string;
  victories: number;
  loses: number;
  gamesPlayed: number;
  position?: number;
}

export interface Match {
  team1: string;
  team2: string;
  winner?: string;
}

export interface Round {
  name?: string;
  startAt?: string;
  matches: Match[];
  toBeDetermined: boolean;
}
