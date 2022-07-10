import "./description.scss"

const Description = () => {
    return (
        <div className="description-container">
            <h3>Marca</h3>
            <h2>Modelo</h2>
            <div className="description-info">
                <p className="info_item">CPU</p>
                <p className="info_item">RAM</p>
                <p className="info_item">Sistema Operativo</p>
                <p className="info_item">Resolucion de pantalla</p>
                <p className="info_item">Bateria</p>
                <p className="info_item">Camaras</p>
                <p className="info_item">Dimensiones</p>
                <p className="info_item">Peso</p>
            </div>
            <div className="description-price"><h3>Precio</h3></div>
        </div>
    )
}

export default Description