import { useState } from 'react'
import mocks_lista from "../mocks/mocks_lista";
import { Link } from 'react-router-dom';
import "../style/style.css";


export default function Listar(){
  const [data,setData]=useState(mocks_lista);
  const descripcion = data.map((dc, indice) => {
    if (indice === 0) {
      return dc.descripcion;
    }
  });
  const len =5;

  const cap = (descripcion) => {
    const captura=descripcion
    console.log(descripcion);
  };

    
  return (
  <>  <main className='flex-container'>
        <div className='text-title'>To-Do list</div>
      </main>
      <div>
        <ol className='lista1'>
          <li className='caja-content1'><p className='elementos' key={1} onClick={() => cap(descripcion)}>1 &emsp;&emsp;{descripcion}</p></li>
        </ol>
      </div>
      <div>
        <ol className='lista2'>
          {data.map((dc, indice) => {
            if (indice > 0 && indice < 5) {
              return (
                <li className='caja-content' key={dc.id}><p className='elementos' onClick={() => cap(dc.descripcion)}>{dc.id} &emsp;&emsp;{dc.descripcion}</p></li>
              );
            }
          })}
        </ol>
        <ol className='lista2'>
          <li className='caja-content2'><p className='elemento-total'>Total: {len}</p></li>
        </ol>
      </div>      
      <div className='caja-content3'>             
              <Link to='/agregar' className='text-button'>ADD</Link>
      </div>      
    </>
  )
}
