import React from 'react';
import './video.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdEdit } from "react-icons/md";

const Video = (props) => {
    const{ nombre, imagen, video,descripcion, categoria, id}=props.datos
    const{ eliminarVideo }=props
    return (
        <div className="video">
            <AiFillCloseCircle className='eliminar' onClick={()=> eliminarVideo(id)}/>
            <MdEdit className='edit'/>
            <div className="foto">
                <img src={imagen} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5><a href={video} target="_blank" rel="noopener noreferrer">Ver video</a></h5>
                <h6>{descripcion}</h6>
            </div>
        </div>
    );
};

export default Video;
