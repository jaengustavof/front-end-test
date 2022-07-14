import axios from "axios";
import { useEffect, useState } from "react";


const GetItems = () => {
    const [items, setItems ]  = useState([]);
    try {

      const getAll= async () => {
        const result = await axios.get(
          `https://front-test-api.herokuapp.com/api/product`
        );
        const allItems = result.data;

        setItems(allItems)
      };

      useEffect(() => {
        getAll();

        setInterval(() => {
            getAll();
        }, 3600000);
      }, []);

    } catch (error) {
      console.log(error);
      console.log(error.message)
    }
      return {items, setItems };

}

export default GetItems;