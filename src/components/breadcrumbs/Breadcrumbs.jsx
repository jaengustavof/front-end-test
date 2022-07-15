import { Outlet, Link} from "react-router-dom";
import "./breadcrumbs.scss"
import { useEffect, useState, useContext } from "react";
import FetchContext from "../../context/fetchContext";


const Breadcrumbs = () => {
    const { items, setItems, urlParams, setUrlParams, breadcrumb, setBradcrum} = useContext(FetchContext);
    

    useEffect(()=>{
        let result = items.filter(e => e.id === urlParams)
        setBradcrum(result[0])
    },[urlParams])
    console.log(breadcrumb)
    if(breadcrumb){
        return (
        
            <div className="breadcrumb-container">
                <Link to="/" >Home</Link>
                <span>/</span>
                <p>{breadcrumb.model}</p>
            </div>
            
        )
    }
    
}

export default Breadcrumbs