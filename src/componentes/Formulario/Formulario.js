
import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario =(props)=>{

    const[nombre,actualizarNombre]= useState("")
    const[imagen,actualizarImagen]= useState("")
    const[video,actualizarVideo]= useState("")
    const[descripcion,actualizarDescripcion]= useState("")
    const[categoria, actualizarCategoria]=useState("")
    
    const manejarEnvio = (e)=>{
        e.preventDefault()
        let datosAEnviar={
            nombre,
            imagen,
            video,
            descripcion,
            categoria
        }
        props.registrarVideo(datosAEnviar)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el video </h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required value={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Imagen" placeholder="Ingresar Url de la imagen" required value={imagen} actualizarValor={actualizarImagen}/>
            <CampoTexto titulo="Video" placeholder="Ingresar Url del video" required value={video} actualizarValor={actualizarVideo}/>
            <CampoTexto titulo="Descripcion" placeholder="Ingresar Descripcion"required value={descripcion} actualizarValor={actualizarDescripcion}/>
            <ListaOpciones required
             valor={categoria} 
             actualizarCategoria={actualizarCategoria} 
             categorias={props.categorias}/>
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario