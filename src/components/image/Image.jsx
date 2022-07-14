import "./image.scss"

const Image = (props) => {
    const {imgUrl, model} = props.imageInfo
    return (
        <img className="item-image" src={imgUrl} height="500px" alt={model}/>
    )
}

export default Image;