import FetchContext from "../../context/fetchContext";
import { useContext } from "react";



const Search = () => {

    const { filters, setFilters} = useContext(FetchContext);
    const handleChange = (e) =>{
        
        const filterParams = e.target.value;
        setFilters(filterParams)
 
  
    }
    

    
    return(
        <input type="text" className="header-input" onChange={handleChange} />
    )

}

export default Search