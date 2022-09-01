import { useEffect, useState } from "react";
import { GenreResponseInterface } from "../interfaces/genere.interface";
import { Button } from "./Button";

import { api } from '../services/api';

interface SidebarProps {
  selectedGenreId: number;
  handleClickButton: any;
}


export function SideBar({ selectedGenreId, handleClickButton }: SidebarProps) {

  const [genres, setGenres] = useState<GenreResponseInterface[]>([]);

  useEffect(() => {
    api.get<GenreResponseInterface[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}