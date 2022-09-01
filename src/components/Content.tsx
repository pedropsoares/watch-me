import { GenreResponseInterface } from "../interfaces/genere.interface";
import { MovieInterface } from "../interfaces/movie.interface";
import { MovieCard } from "./MovieCard";

interface Props {
  selectedGenre: GenreResponseInterface;
  movies: MovieInterface[]
}

export function Content({selectedGenre, movies}: Props) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}