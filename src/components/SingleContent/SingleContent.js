import React from 'react';
import {img_300} from '../../Config/Config';
import { unavailable } from '../../Config/Config';
import "./SingleContent.css";
import {Badge} from '@material-ui/core';
import ContentModal from '../ContentModal/ContentModal';


const SingleContent = ({id,poster,title,date,media_type,vote_average}) => {
  return (
      <ContentModal media_type = {media_type} id ={id}>
        <Badge badgeContent ={vote_average} color ={vote_average>6?'primary': 'secondary'}/>
      <img className="poster" 
      src = { poster ? `${img_300}/${poster}` : unavailable} alt="title" />
      <h1 className='title'>{title}</h1>
      <span className='subTitle'>
          {media_type === 'tv' ? "TV Series": "Movie"}
          </span> 

          <span className='subTitle'>
              {date}
          </span>
      
</ContentModal>
  )
};

export default SingleContent;
