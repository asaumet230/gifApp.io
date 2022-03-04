import React from 'react';
import PropTypes from 'prop-types';

// Imagenes:
import imagen from '../img/saitama.png';
import AddCategory from './AddCategory';

const Header = ({ setCategory, setSearch,  category }) => {

  return (
    <header className="header">

      <nav className="nav">
        <div className="logo">

          <img  
            className="img-logo animate__animated animate__headShake animate__delay-1s" 
            src={imagen} 
            alt="gift-app-react"/>

          <h1 className="titulo-logo"> GifApp </h1>

        </div>

        <div className="search">

          <AddCategory 
            setCategory={ setCategory }
            setSearch= { setSearch }
            category={ category }
            />
          
        </div>
      </nav>
      
    </header>
  )
}

Header.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setSearch : PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
 
}

export default Header