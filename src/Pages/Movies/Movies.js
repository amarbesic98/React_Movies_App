import axios from 'axios';
import React, { useEffect } from 'react';
import useGenre from '../../components/Hooks/useGenre';
import { useState } from 'react';
import CustomPagination from '../../components/Pagination/CustomPagination';
import SingleContent from '../../components/SingleContent/SingleContent';
import { Genres } from '../../components/Genres/Genres';
const Movies = () => {
  const [page,setPage] = useState(1);
  const [content,setContent] = useState([]);
  const [numOfPages,setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres,setGenres] = useState([]);
  const genreUrl = useGenre(selectedGenres);
  
  const fetchMovies = async () => {
    const {data}  = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=a18cb3b1241ecb141bef275de067565d&language
    =en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreUrl}`);

    setContent(data.results);
    setNumOfPages(data.total_pages);
    
  }

  useEffect(()=> {

    window.scroll(0, 0);
    fetchMovies();

  },[page,genreUrl])

  return (
    <div>

    <span className="pageTitle">Discover Movies</span>
    <Genres 
    type ='movie'
    selectedGenres={selectedGenres}
    genres = {genres}
    setGenres ={setGenres}
    setSelectedGenres={setSelectedGenres}
    setPage ={setPage}

    
    />
    <div className="trending">
    {content &&
      content.map((c) => (
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type="movie"
          vote_average={c.vote_average}
        />
      ))}
  </div>

    {<CustomPagination setPage={setPage} numOfPages={numOfPages} /> }

    </div>
  
  )
};

export default Movies;
