import "./ListaOpciones.css"

const ListaOpciones =(props)=>{

    const categorias =[
        "FrontEnd",
        "BackEnd",
        "Innovacción y Gestion"
    ]
const manejarCambio=(e)=>{
    props.actualizarCategoria(e.target.value)
    
}

    return <div className="lista-opciones">
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
            {categorias.map((categoria, index)=>{
                return <option key={index} value={categoria}>{categoria}</option>
            })}
        </select>
    </div>

}

export default ListaOpciones