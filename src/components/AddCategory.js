import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const AddCategory = ({ setCategory, setSearch, category }) => {

    const [inputValue, setInputValue] = useState('');
    

    const handdleForm = (e) => {

      e.preventDefault();

      if( inputValue.trim().length < 2 ) {
      
        return Swal.fire ({
          icon: 'error',
          title: 'Oops...',
          text: 'Tu buqueda debe tener al menos dos letras!',
        });
      }

      if( !category.includes( inputValue )) {
        setCategory([ inputValue, ...category ]);
        setSearch( inputValue );
        setInputValue('');
      }

      
    }

  return (
    <form 
        className="formulario" 
        onSubmit={ handdleForm }>

        <input 
            className="form-control mx-2 input" 
            placeholder="Busca tu Gif..." 
            type="text" 
            value={inputValue}
            onChange={ (e) => setInputValue( e.target.value ) }
        />
        
        <button 
            className="btn btn-primary boton" 
            type="submit">Buscar</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
  setSearch : PropTypes.func.isRequired,
  category: PropTypes.array.isRequired,
 
}

export default AddCategory