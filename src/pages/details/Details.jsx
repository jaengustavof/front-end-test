import "./details.scss"
import Image from "../../components/image/Image";
import Description from "../../components/description/Description";
import Actions from "../../components/actions/Actions";

const Details = () => {
    return (
        <div className="details-view">
            <div className="details-view_container">
                <div className="product-image">

                    <Image src="https://cdn.shopify.com/s/files/1/0580/3360/2737/products/Test-Logo-Circle-black-transparent.png?v=1645867053"/>
                </div>
                <div className="product-description">
                    <Description/>
                    <Actions />
                </div>
            </div>

        </div>
    )
}

export default Details;