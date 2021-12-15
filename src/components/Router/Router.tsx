import react from 'react';
import {Route, Routes} from 'react-router-dom';
import Contact from '../../pages/Contact/Contact';

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Router