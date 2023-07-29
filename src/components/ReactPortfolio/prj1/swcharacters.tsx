import "./swcharacters.styles.css";
import { SWCharacters, StarWarsCharacter } from "./swcharacters.types";
import { useState } from "react";
import { useFetchStarWarsPeople } from "./swcharacters.hooks";
import { Alert, Spin } from "antd";

const StarWarsAPIProject = () => {
  const [characterQuery, setCharacterQuery] = useState("");
  const [url] = useState<string>("https://swapi.dev/api/people/?search=");
  const [characterSearch, setCharacterSearch] = useState("");
  const { characters, isLoading } = useFetchStarWarsPeople(
    url,
    characterSearch
  );

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
  }: StarWarsCharacter) {
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

  return (
    <main>
      <h2 className="title-padding" id="Portfolio">
        Star Wars Characters
      </h2>
      <p>
        Based off the first 6 movies, does not contain live action / animated
        series
      </p>

      {isLoading ? (
        <Spin size="large" tip="Loading...">
          <Alert style={{ height: "100px" }} />
        </Spin>
      ) : (
        <div>
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
              {characters.map((user: SWCharacters, index) => (
                <TableRow
                  key={index}
                  character={user.name}
                  height={user.height}
                  hairColor={user.hair_color}
                  birthYear={user.birth_year}
                  skinColor={user.skin_color}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default StarWarsAPIProject;
