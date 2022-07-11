import FetchContext from "../../context/fetchContext";
import { useContext } from "react";



const Search = () => {

    const { filter, setFilter} = useContext(FetchContext);
    const handleChange = (e) =>{
        
        const filterParams = e.target.value;
        setFilter(filterParams)
  
    }
    

    console.log(filter)
    return(
        <input type="text" className="header-input" onChange={handleChange} />
    )

}

export default Search