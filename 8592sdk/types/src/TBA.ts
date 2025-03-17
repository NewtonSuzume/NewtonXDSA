export interface TBASimpleTeam {
  city: null | string;
  country: string | null;
  key: string;
  name: string;
  nickname: string;
  state_prov: null | string;
  team_number: number;
}

export interface TBAEvent {
  address: string;
  city: string;
  country: string;
  district: TBADistrict | null;
  division_keys: any[];
  end_date: Date;
  event_code: string;
  event_type: number;
  event_type_string: string;
  first_event_code: string;
  first_event_id: null;
  gmaps_place_id: string;
  gmaps_url: string;
  key: string;
  lat: number;
  lng: number;
  location_name: string;
  name: string;
  parent_event_key: null | string;
  playoff_type: number;
  playoff_type_string: string;
  postal_code: string;
  short_name: string;
  start_date: Date;
  state_prov: string;
  timezone: string;
  webcasts: TBAWebcast[];
  website: string;
  week: number | null;
  year: number;
}

export interface TBADistrict {
  abbreviation: string;
  display_name: string;
  key: string;
  year: number;
}

export interface TBAWebcast {
  channel: string;
  type: string;
}

export interface TBAMediaObj {
  type: string;
  foreign_key: string;
  details: { base64Image?: string };
  preferred: boolean;
  direct_url: string;
  view_url: string;
}


