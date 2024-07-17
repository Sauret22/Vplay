import "./categoria.css"
import Video from "../Video"


const Categoria =(props)=>{
    const { videos, eliminarVideo }= props


    return <section className="categoria">
        <h3>{props.datos.titulo}</h3>
        <div className="videos">
       {
        videos.map((video,index)=><Video datos={video} key={index} eliminarVideo={eliminarVideo}/>)
       }
        </div>
    </section>
}

export default Categoria