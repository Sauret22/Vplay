import {useState} from "react"


import "./Header.css"

function Header  (props){

    return <header className="header">
    <h1>VPLAY</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#Nuevo Video" onClick={props.cambiarMostrar}>Nuevo Video</a></li>
        </ul>
    </nav>
</header>

}
export default Header