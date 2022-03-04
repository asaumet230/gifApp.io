import React from 'react';
import PropTypes from 'prop-types';

// Components:
import Message from './Message';
import Gif from './Gif';

const GifGrid =  ({ gifsResults, search }) => {
   
  return (

    <div className="container" >
      {
        gifsResults.length === 0 ? 
        <Message /> : 
        <Gif 
          gifsResults= { gifsResults }
          search= { search }/>   
      }    
    </div>
    
  )
}

GifGrid.propTypes = {
  gifsResults: PropTypes.array.isRequired,
  search: PropTypes.string.isRequired
}

export default GifGrid