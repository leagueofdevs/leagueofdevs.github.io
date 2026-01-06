import { Team, Round } from "../types";

export const teams: Array<Team> = [];

export const rounds: Array<Round> = [
  {
    name: "Rodada 1",
    toBeDetermined: true,
    matches: Array.from({ length: 8 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 2 (1-0)",
    toBeDetermined: true,
    matches: Array.from({ length: 4 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 2 (0-1)",
    toBeDetermined: true,
    matches: Array.from({ length: 4 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 3 (2-0) - Valendo Classificação",
    toBeDetermined: true,
    matches: Array.from({ length: 2 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 3 (1-1)",
    toBeDetermined: true,
    matches: Array.from({ length: 4 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 3 (0-2) - Valendo Eliminação",
    toBeDetermined: true,
    matches: Array.from({ length: 2 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 4 (2-1) - Valendo Classificação",
    toBeDetermined: true,
    matches: Array.from({ length: 3 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 4 (1-2) - Valendo Eliminação",
    toBeDetermined: true,
    matches: Array.from({ length: 3 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
  {
    name: "Rodada 5 (2-2) - Decisiva",
    toBeDetermined: true,
    matches: Array.from({ length: 3 }, () => ({
      team1: "TBD",
      team2: "TBD",
      winner: "",
    })),
  },
];
