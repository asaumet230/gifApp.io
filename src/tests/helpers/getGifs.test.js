import '@testing-library/jest-dom';

import getGifs from '../../helpers/getGifs';


describe('Pruebas funcion getGifs', () => { 

    test('Debe de retornar un arreglo con mas de un elemento', async () => { 
        
        const resp = await getGifs('manga');
        expect(resp.length).toBe(12);
     
    });

     test('Debe de retornar un arreglo vacio', async () => { 
        
        const resp = await getGifs('');
        expect(resp.length).toBe(0);
     
    });

});