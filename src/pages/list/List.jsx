import "./list.scss";
import Search from "../../components/search/Search";
import Item from "../../components/item/Item";
import { useEffect, useState, useContext } from "react";
import FetchContext from "../../context/fetchContext";



const List = () => {
   
    const { items, setItems, filters, setFilters, setBradcrum} = useContext(FetchContext);
    const [filteredStock, setFilteredStock] = useState(items)
    setBradcrum("")
    useEffect(() => {
        setFilteredStock(items)
    },[items]);

    useEffect(() => {
        let result
      if(!filters) {
        result = items
      }else {
        result = items.filter(e=> e.brand.toLowerCase().includes(filters.toLowerCase()) || e.model.toLowerCase().includes(filters.toLowerCase()))
      }
      setFilteredStock(result)
    },[filters])
   

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
                        
                        <Item info={info} key={info.id}/>
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