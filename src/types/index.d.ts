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
