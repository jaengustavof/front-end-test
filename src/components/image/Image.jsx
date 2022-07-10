

const Image = (props) => {
    console.log(props.src)
    return (
        <img src={props.src} width="100%"alt=""/>
    )
}

export default Image;