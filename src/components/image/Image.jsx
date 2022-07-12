import "./image.scss"

const Image = (props) => {
    const {imgUrl, model} = props.imageInfo
    return (
        <img className="item-image" src={imgUrl} height="600px" alt={model}/>
    )
}

export default Image;