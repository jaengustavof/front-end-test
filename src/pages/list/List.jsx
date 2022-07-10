import "./list.scss";
import Search from "../../components/search/Search";
import Item from "../../components/item/Item";
import { useEffect, useState, useContext } from "react";
import FetchContext from "../../context/fetchContext";
import GetItems from "../../hooks/GetItems"


const List = () => {
    GetItems()
    const { items, setItems } = useContext(FetchContext);

    return (
        <div className="list-view">
            <div className="list-view_search">
                <Search/>
            </div>
            <div className="list-view_container">
            {items.map(e=>{
                    const info = {
                        id: e.id,
                        name: e.brand,
                        model: e.model,
                        image: e.imgUrl
                    }
                    return(
                        <Item info={info}/>
                    )
                })}
            </div>
        </div>
    )
}

export default List;