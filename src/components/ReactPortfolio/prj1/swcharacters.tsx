import "./swcharacters.styles.css";
import { SWCharacter } from "./swcharacters.types";
import { useState } from "react";
import { useFetchStarWarsPeople } from "./swcharacters.hooks";

const StarWarsAPIProject = () => {
  const [url] = useState<string>("https://swapi.dev/api/people/?search=");
  const [characterSearch, setCharacterSearch] = useState("");
  const { characters } = useFetchStarWarsPeople(url, characterSearch);

  const handleInputChange = (event: any) => {
    setCharacterSearch(event.target.value);
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
      <div className="center">
        <input
          className="input"
          type="text"
          value={characterSearch}
          onChange={handleInputChange}
          placeholder="Enter Character Name"
        />
        {/* <button onClick={handleClick}>Click Me</button> */}
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
