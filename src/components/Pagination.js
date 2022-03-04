import React, { useEffect, useState } from 'react';

const Pagination = ( ) => {

    const [ offset, setOffset ] = useState(12);
    const [ disabled, setDisabled ] = useState("");

    useEffect(() => {
      
        if( offset <= 12 ) {
           setDisabled("disabled");
        } 

    }, [offset])
    

    const handlePagination = (value) => {

        setDisabled("");
        setOffset( offset + value );
    }
    

    return (
        <div className="paginacion">

            <button 
                className={`btn btn-primary ${disabled}`} 
                onClick={ ()=> handlePagination(-12) }>
                Anterior
            </button>

            <button 
                className="btn btn-primary" 
                onClick={ ()=> handlePagination(+12) }>
                Siguiente
            </button>
            
        </div>
    )
}

export default Pagination