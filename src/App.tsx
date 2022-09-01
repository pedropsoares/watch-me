import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { MovieCard } from './components/MovieCard';

import { GenreResponseInterface } from './interfaces/genere.interface';
import { MovieInterface } from './interfaces/movie.interface';

import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseInterface>({} as GenreResponseInterface);

  useEffect(() => {
    api.get<MovieInterface[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseInterface>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} handleClickButton={handleClickButton}/>

      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  )
}