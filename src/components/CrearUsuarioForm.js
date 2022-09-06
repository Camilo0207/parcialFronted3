import React, {useState,useEffect} from 'react'



const initialPerson ={
        apellido: "",
        dni: "",
        nombre: "",
        domicilio:{
            calle:"",
            numero:"",
            localidad:"",
            provincia :""
        }
    }

export default function CrearUsuarioForm({createData}){
    const [persona, setPersona] = useState(initialPerson)
    
    const handleChange =(e)=>{
        setPersona({
            ...persona,
            [e.target.name]: e.target.value, 
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        createData(persona)
        setPersona(initialPerson)
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>Nombre<input name={"nombre"} onChange={handleChange} value={persona.nombre}/></p>
                <p>Apellido<input name={"apellido"} onChange={handleChange} value={persona.apellido}/></p>
                <p>Dni<input name={"dni"} onChange={handleChange} value={persona.dni}/></p>

                <p>Calle<input name={"calle"} onChange={handleChange} value={persona.calle}/></p>
                
                <p>Numero<input name={"numero"} onChange={handleChange} value={persona.numero}/></p>
                <p>Localidad<input name={"localida"} onChange={handleChange} value={persona.localidad}/></p>
                <p>Provincia<input name={"provincia"} onChange={handleChange} value={persona.provincia}/></p>
                <input type={"submit"} value={"Cear usuario"}/>
            </form>
        
        </>
    )
}