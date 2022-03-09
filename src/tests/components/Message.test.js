import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Message from '../../components/Message';


describe('Pruebas componente <Message />', () => { 

    let wrapper = shallow( <Message /> );

    test('Componente <Message /> debe renderizarse correctamente con un snapShot', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Componente <Message /> debe tener el className= "mensaje"', () => { 
        
        const div = wrapper.find('div');

        expect(div.hasClass('mensaje')).toBe(true);

     });



});