import "./list.scss";
import Search from "../../components/search/Search";
import Item from "../../components/item/Item";
import { useEffect, useState, useContext } from "react";
import FetchContext from "../../context/fetchContext";
import GetItems from "../../hooks/GetItems"


const List = () => {
    GetItems()
    
    const { items, setItems, filter, setFilter} = useContext(FetchContext);
    const [filteredStock, setFilteredStock] = useState(items)
    let result = items
    useEffect(() => {
            if(filter.length >=1 ){
                let filtered = result.filter(e=> e.brand.includes(filter) || e.model.includes(filter))
                result = filtered
            }else{
                result = items
            }
            setFilteredStock(result)
            console.log(filteredStock)
        },[filter])

    return (
        <div className="list-view">
            <div className="list-view_search">
                <Search/>
            </div>
            <div className="list-view_container">
            {filteredStock.map(e=>{
                    const info = {
                        id: e.id,
                        name: e.brand,
                        model: e.model,
                        image: e.imgUrl
                    }
                    return(
                        <Item info={info}/>
                    )
                })
                
            }

            </div>
        </div>
    )
}
/*
            
*/

export default List;