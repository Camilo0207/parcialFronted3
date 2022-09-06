import React,{useState,useEffect} from 'react'
import { helpHttps } from '../../helpers/helpHttp'
import {v4 as uuidv4} from "uuid"
import CrearUsuarioForm from './CrearUsuarioForm'


export default function CrearUsuarioApp(){
    const [db, setDb] = useState(null)
    const [errores, setErrores] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = helpHttps();
    let url = "http://localhost:8080/pacientes"
console.log(db);
    useEffect(() => {
        setLoading(true)
        helpHttps()
        .get(url)
        .then((res)=>{
            if(!res.err){
                setDb(res)
                setErrores(null)
            }else{
                setDb(null)
                setErrores(res)
            }
        setLoading(false);
        })
    }, [url])
    
    const createData = (data)=>{
        // data.id = uuidv4()

        let options = {
            body:data,
            headers: {"content-type":"application/json"},
        }

        api.post(url,options)
            .then((res)=>{
                if(!res.err){
                    setDb([...db,res])
                }else{
                    setErrores(res)
                }
        })
    }

    const updateData =(data)=>{
        const urlUpdate =`${url}/${data.id}`

        let options = {
            body:data,
            headers: {"content-type":"application/json"},
        }

        api.put(urlUpdate,options)
            .then((res)=>{
                if(!res.err){
                    let newData = db.map(el=>el.id === data.id? data : el)
                    setDb(newData)
                }else{
                    setErrores(res)
                }
            })
    }

    const dataDelete = (id)=>{
        let deleteConfirm = window.confirm(
            `¿Estás seguro de eliminar el registro con el id '${id}'?`
        )

        if(deleteConfirm){
            let endpoint =`${url}/${id}`
            let options={
                headers:{"content-type":"application/json"}
            } 
            api.del(endpoint,options)
                .then(res =>{
                    if(!res.err){
                        let newData =db.filter(el=>el.id !== id)
                        setDb(newData)
                    }
                })
        }else{
            return
        }
    }
    return(
        <div>
            <h2>creando usuario</h2>
            <CrearUsuarioForm
                createData={createData}
            />
        </div>
    )
}