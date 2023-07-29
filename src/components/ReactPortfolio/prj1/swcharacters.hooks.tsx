import { useState, useEffect } from "react";
import { SWCharacters, ApiFetchState } from "./swcharacters.types";

export const useFetchStarWarsPeople = (
  url: string,
  characterSearch: string
): ApiFetchState => {
  const [characters, setCharacters] = useState<SWCharacters[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`${url}${characterSearch}`);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(new Error(error.message));
        } else {
          setError(new Error("An unknown error occurred."));
        }
      }
      setIsLoading(false);
    };

    fetchCharacters();
  }, [url, characterSearch]);

  return { characters, isLoading, error };
};
