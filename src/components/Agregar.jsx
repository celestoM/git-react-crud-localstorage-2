import { useState, useRef } from "react";
import "../style/style_agregar.css";
import {Link} from "react-router-dom";
import { useFormAction } from "react-router-dom";


export default function Agregar(){
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [active,setActive] = useState("");
    const [register,setRegister] = useState([]);
    const formRef = useRef();

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        switch (name){
            case "email":
                setEmail(value);
                break;
            case "name":
                setName(value);
                break;
            case "active":
                setActive(value);
            break;

            default:
        }
    }
    
function handleClickRegister(){

    const registro={
        id: crypto.randomUUID(),
        email,
        name,
        active,
    }; 
    const temp=[...register];
    temp.push(registro);
    setRegister(temp); 
    console.log(temp);
    resetForm();
}

/*const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el submit del formulario
    formRef.current.reset(); // Resetea el formulario
    event.target.reset();
  };
  */
  const resetForm = () => {
    setName("")
    setEmail("")
    setActive("")
  }


    return (       
        <form>
            <div className='flex-container-a'>
                <div className='text-title-a'>ADD</div>
            </div>
            <div className='caja-content1-a'>
                <label className='text-content-a' >1 &emsp;&emsp;EMAIL</label>
                <input className='input-a'
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                />
            </div>
            <div className='caja-content2-a'>
                <label className='text-content-a' >2 &emsp;&emsp;NAME</label>
                <input className='input-a'
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                />
            </div>
            <div className='caja-content3-a'>
                <label className='text-content-a' >3 &emsp;&emsp;ACTIVE (YES OR NO)</label>
                <input className='input-a'
                type="text"
                name="active"
                onChange={handleChange}
                value={active}
                />
            </div>
            <div className="content-button-a">      
                <div className='caja-content4-a'>            
                    <Link to='/' className='text-button-a'>GO TO HOME</Link>
                </div>
                <div className='caja-content4-a'>
                    <button type="button" className="square-button" onClick={handleClickRegister}>ADD USER</button>            
                </div>
            </div>
      </form>   
    )
}