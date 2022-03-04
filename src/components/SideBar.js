import React, { useEffect } from 'react'

const SideBar = ({ category, setCategory, setSearch, setGifsResults }) => {

    useEffect(() => {

        if(JSON.parse(localStorage.getItem('categorias'))) {
            setCategory(JSON.parse(localStorage.getItem('categorias')));
        }
      
    // eslint-disable-next-line
    }, []);

    const handleSearch = (e)=> {

        setSearch(e.target.innerText);
    }

    const handleCategories = ()=> {

        setCategory([]);
        setGifsResults([]);
        localStorage.removeItem('categorias');

    }

    return (
        <aside className="sideBar">

            { category.length > 0 ?  
            (
                <>
                    <div>
                        {
                            category.map( cat => (
                                <button 
                                    type="button" 
                                    className="btn btn-warning busqueda" 
                                    key={cat}
                                    onClick={ (e) => handleSearch(e) }>{ cat }</button>
                            ))
                        }
                    </div>
                    <hr/>
                    <p>Historial</p>
                    <button 
                        className="btn btn-danger"
                        onClick={ handleCategories }>Eliminar Historial</button>
                
                </>
           ) : 
            
            ( <p className='btn btn-success advertencia'> No hay busquedas )=</p> )}
        </aside>
    )
}

export default SideBar