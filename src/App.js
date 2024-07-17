
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import VideoSection from './componentes/VideoSection/VideoSection';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';



function App() {
  const [mostrarFormulario, actualizarMostrar]= useState(false)
  const [videos,actualizarVideos] = useState([{
    id:uuid(),
    categoria:"FrontEnd",
    imagen:"./img/java.png",
    video:"https://www.youtube.com/watch?v=W86KTBSiX2o",
    descripcion:"Aprende Java",
    nombre:"!vamos a Aprender¡"
  },
  {
    id:uuid(),
    categoria:"FrontEnd",
    imagen:"./img/java2.png",
    video:"https://www.youtube.com/watch?v=L1oMLsiMusQ",
    descripcion:"Un curso de java para ti",
    nombre:"Curso Java desde cero #1"
  },
  {
    id:uuid(),
    categoria:"BackEnd",
    imagen:"./img/back.png",
    video:"https://www.youtube.com/watch?v=50RbVujPPGs",
    descripcion:"Una explicacion breve acerca de BackEnd",
    nombre:"¿Que es BackEnd?"
  },
  {
    id:uuid(),
    categoria:"BackEnd",
    imagen:"./img/back2.png",
    video:"https://www.youtube.com/watch?v=eymgiK3y2mU",
    descripcion:"Video perfecto para aprender BackEnd",
    nombre:"¿Cuál es el mejor lenguaje de programación de Backend para ti?"
  },
  {
    id:uuid(),
    categoria:"Innovación y Gestion",
    imagen:"./img/dis.png",
    video:"https://www.youtube.com/watch?v=4Azc4Gs2nlU",
    descripcion:"Este video es para mejorar tus diseños",
    nombre:"!Mejora en diseño¡"
  },
  {
    id:uuid(),
    categoria:"Innovación y Gestion",
    imagen:"./img/dis2.png",
    video:"https://www.youtube.com/watch?v=RatwuQvhpT8",
    descripcion:"Este video es una guia para empezar tus diseños de pagians web",
    nombre:"Paso a Paso"
  }
])


  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarVideo =(video)=>{
    actualizarVideos([...videos, video])
  }

  const eliminarVideo = (id)=>{
    const nuevosVideos = videos.filter((video)=> video.id !==id)
    actualizarVideos(nuevosVideos)
  }
  

  const categorias =[

    {
      id:uuid(),
      titulo: "FrontEnd"
    },
    { 
      id:uuid(),
      titulo:"BackEnd"
    },
    {
      id:uuid(),
      titulo:"Innovación y Gestion"
    }
]
{
  categorias.map((categoria)=><Categoria datos={categoria} key={categoria.titulo}/>)
}

  return (
    <div className="App">
      <Header cambiarMostrar={cambiarMostrar}/>
      { mostrarFormulario && <Formulario
       categorias={categorias.map((categoria)=> categoria.titulo)}
       registrarVideo={registrarVideo}
        
        />
        }
      
      <VideoSection/>
    {
    categorias.map((categoria)=><Categoria
     datos={categoria} 
     key={categoria.titulo} 
     videos={videos.filter(video=> video.categoria === categoria.titulo)}
     eliminarVideo={eliminarVideo}
     />)
    }
    <Footer/>  
    </div>
  );
}

export default App;
