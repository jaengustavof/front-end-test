import "./list.scss";
import Search from "../../components/search/Search";
import Item from "../../components/item/Item";
import { useEffect, useState, useContext } from "react";
import FetchContext from "../../context/fetchContext";



const List = () => {
   
    
    const { items, setItems, filter, setFilter} = useContext(FetchContext);
    const [filteredStock, setFilteredStock] = useState(items)
    
    let result = items
    useEffect(() => {
        setFilteredStock(result)
    },[items])

    useEffect(() => {
      if(!filter) {
        result = items
      }else {
        result = result.filter(e=> e.brand.includes(filter) || e.model.includes(filter))
      }
      setFilteredStock(result)
    }, [filter])
    

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