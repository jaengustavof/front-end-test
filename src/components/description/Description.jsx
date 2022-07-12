import "./description.scss"

const Description = (props) => {

    const { brand, model, cpu, os, battery, dimentions, ram, displayResolution, primaryCamera, secondaryCmera, weight, price} = props.description
    return (
        <div className="description-container">
            <h3 className="product-brand">{brand}</h3>
            <h2 className="product-model">{model}</h2>
            <div className="description-info">
                <p className="info_item">{cpu}</p>
                <p className="info_item">{ram}</p>
                <p className="info_item">{os}</p>
                <p className="info_item">{displayResolution}</p>
                <p className="info_item">{battery}</p>
                <p className="info_item">{primaryCamera} / {secondaryCmera}</p>
                <p className="info_item">{dimentions}</p>
                <p className="info_item">{weight}</p>
            </div>
            <div className="description-price"><h3>{price} Eur</h3> </div>
        </div>
    )
}

export default Description