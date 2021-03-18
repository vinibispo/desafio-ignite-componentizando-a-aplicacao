import {GenreResponseProps} from "../utils/types";
import {Button} from "./Button";

export function SideBar({onClick, genres, selected}: {onClick: (id: number) => void, genres: GenreResponseProps[], selected: number}) {
  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClick(genre.id)}
              selected={selected === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}
