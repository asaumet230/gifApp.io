import React, { useEffect, useState } from 'react';

// Components:
import Header from './components/Header';
import GifGrid from './components/GifGrid';

// Hooks:
import getGifs from './helpers/getGifs';
import SideBar from './components/SideBar';

const GifApp = () => {

  const [ category, setCategory ] = useState([]);
  const [ gifsResults, setGifsResults ] = useState([]);
  const [ search, setSearch ] = useState('');
  
 
  useEffect(() => {

    if( search.trim().length > 2 ) {

      getGifs( search ).then( res => setGifsResults(res));
      localStorage.setItem('categorias', JSON.stringify(category));
    }
  
    // eslint-disable-next-line
  }, [ search ])
  

  return (
    <>
      <Header 
        setCategory= { setCategory }
        setSearch= { setSearch }
        category = { category }
      />

      <div className="main">

        <SideBar 
          category = { category }
          setCategory= { setCategory }
          setSearch = { setSearch }
          setGifsResults = { setGifsResults }/>
          
        <GifGrid
          gifsResults= { gifsResults }
          search = { search }
        />

      </div>
    </>
  )
}

export default GifApp