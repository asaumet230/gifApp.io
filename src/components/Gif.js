import React, { useState } from 'react';

// Components:
import Pagination from './Pagination';
import Spinner from './Spinner';

const Gif = ({ gifsResults, search }) => {

  const [cargando, setCargando] = useState(true);

  setTimeout(() => {
      
    setCargando(false);

  }, 500);
    
  return (
    <>
        { cargando? <Spinner /> :
            <>
                <h2 className="titulo-busqueda">{ search }</h2>
                <ul className="gifs-grid animate__animated animate__backInDown">
                    {
                        gifsResults.map(( { id, image, slug, title, decription, download } ) =>  (

                            <li key={id}>
                                <div className="card rounded mb-4">
                                    <img src={image.url} alt={slug}/>
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold">{ title }</h6>
                                        <hr/>
                                        <p className="texto"> {decription} </p>
                                        <a href={download}   
                                            target="_blank"    
                                            rel="noreferrer" 
                                            className='btn btn-outline-primary descargar'>Descargar</a>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>

                { gifsResults.length > 0 && <Pagination /> }
            </>
        }
    </>
   
  )
}

export default Gif