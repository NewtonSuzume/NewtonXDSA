import { AllianceColor } from "@8592/db";

export interface TBAMatchSimple {
  key: string;
  comp_level: string;
  set_number: number;
  match_number: number;
  alliances: Alliances;
  winning_alliance: string;
  event_key: string;
  time: number;
  predicted_time: number;
  actual_time: number;
}

export interface Alliances {
  red: TBAAlliance;
  blue: TBAAlliance;
}

export interface TBAAlliance {
  score: number;
  team_keys: string[];
  surrogate_team_keys: string[];
  dq_team_keys: string[];
}
export interface TBAAllianceWithColor extends TBAAlliance { 
    color: AllianceColor
}

