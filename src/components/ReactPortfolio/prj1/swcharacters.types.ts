export interface SWCharacters {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface ApiFetchState {
  characters: SWCharacters[];
  isLoading: boolean;
  error: Error | null;
}

export type StarWarsCharacter = {
  key?: number;
  character: string;
  height: string;
  hairColor: string;
  birthYear: string;
  skinColor: string;
};
