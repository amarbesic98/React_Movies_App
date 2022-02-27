import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Trending = () => {
  
  const [content,setContent] = useState ([]);
  const [page,setPage] = useState(1);
  const [numOfPages,setNumOfPages] = useState(1);

  const fetchTrending = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=a18cb3b1241ecb141bef275de067565d&page=${page}`);

    setContent(data.results);

  }

  useEffect(()=> {

    fetchTrending();


  },[page])


  return (
  <div>
      <span className='pageTitle'>Trending</span>
      <div className='trending'>
        
       {content && content.map((c)=> <SingleContent key ={c.id}
         id={c.id}
         poster={c.poster_path}
         title={c.title || c.name}
         date={c.first_air_date || c.release_date}
         media_type={c.media_type}
         vote_average={c.vote_average}
       
       />)}
        
        
      </div>
      <CustomPagination count = {numOfPages} setPage={setPage}
      />

    
     
  </div>
  );
};

export default Trending;


