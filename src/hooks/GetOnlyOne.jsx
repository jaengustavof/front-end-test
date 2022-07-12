import axios from "axios";
import { useEffect, useState } from "react";

const GetOnlyOne = (id) => {
    const [product, setProduct ]  = useState([]);

    const getOne= async () => {

        const result = await axios.get(
          `https://front-test-api.herokuapp.com/api/product/${id}`
        );
        const allItems = result.data;

        setProduct(allItems)
      };
      
      useEffect(() => {
        getOne();
      }, []);

      return {product, setProduct };

}

export default GetOnlyOne;