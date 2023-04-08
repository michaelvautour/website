import "./swcharacters.styles.css";
import { SWCharacter } from "./swcharacters.types";
import { useState } from "react";
import { useFetchStarWarsPeople } from "./swcharacters.hooks";

const StarWarsAPIProject = () => {
  const [characterQuery, setCharacterQuery] = useState("");
  const [url] = useState<string>("https://swapi.dev/api/people/?search=");
  const [characterSearch, setCharacterSearch] = useState("");
  const { characters } = useFetchStarWarsPeople(url, characterSearch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterQuery(event.target.value);
  };

  const handleButtonClick = () => {
    setCharacterSearch(characterQuery);
  };

  function TableRow({
    character,
    height,
    hairColor,
    birthYear,
    skinColor,
  }: any) {
    return (
      <tr>
        <td>{character}</td>
        <td>{height}</td>
        <td>{hairColor}</td>
        <td>{birthYear}</td>
        <td>{skinColor}</td>
      </tr>
    );
  }

  if (!characters) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h2 className="title-padding" id="Portfolio">
        Star Wars Characters
      </h2>
      <p>
        Based off the first 6 movies, does not contain live action / animated
        series
      </p>
      <div className="center">
        <input
          className="input"
          type="text"
          value={characterQuery}
          onChange={handleInputChange}
          placeholder="Enter Character Name"
        />
        <button
          className="btn-search"
          onClick={handleButtonClick}
          style={{ backgroundColor: "lightblue", color: "white" }}
        >
          Search
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Character:</th>
            <th>Height:</th>
            <th>Hair Color:</th>
            <th>Birth Year:</th>
            <th>Skin Color:</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((user: SWCharacter) => (
            <TableRow
              key={user.name}
              character={user.name}
              height={user.height}
              hairColor={user.hair_color}
              birthYear={user.birth_year}
              skinColor={user.skin_color}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default StarWarsAPIProject;
