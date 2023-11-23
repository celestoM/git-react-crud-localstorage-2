import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Listar from './Listar';
import Agregar from './Agregar';

export default function Ruta(){
    return(
        <>
    <div>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Listar />} />
              <Route path="agregar" element={<Agregar />} />
          </Routes>
      </BrowserRouter>    
    </div>
    </>
    )
}