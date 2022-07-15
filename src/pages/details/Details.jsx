import "./details.scss"
import Image from "../../components/image/Image";
import Description from "../../components/description/Description";
import Actions from "../../components/actions/Actions";
import {useParams} from "react-router-dom";
import GetOnlyOne from "../../hooks/GetOnlyOne";
import FetchContext from "../../context/fetchContext";
import { useState, useContext } from "react";

const Details = () => {
    const { id } = useParams();
    const { urlParams, setUrlParams} = useContext(FetchContext);
    setUrlParams(id)
    

    const { product, setProduct} = GetOnlyOne(id)
    const { options } = product
    return (
        <div className="details-view">
            <div className="details-view_container">
                <div className="product-image">

                    <Image imageInfo={product}/>
                </div>
                <div className="product-description">
                    <Description description={product}/>
                    <Actions actions={options}/>
                </div>
            </div>

        </div>
    )
}

export default Details;