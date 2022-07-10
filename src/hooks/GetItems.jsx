import axios from "axios";
import { useEffect, useState, useContext } from "react";
import FetchContext from "../context/fetchContext";

const GetItems = () => {
    const { items, setItems } = useContext(FetchContext);

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
      return {items, setItems };

}

export default GetItems;