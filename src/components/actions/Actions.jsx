import "./actions.scss"
import { useForm } from "react-hook-form";
import FetchContext from "../../context/fetchContext";
import { useContext, useEffect } from "react";
import {useParams} from "react-router-dom";
import PostCart from "../../hooks/PostCart";


const Actions = (props) => {
       const { id } = useParams();
       const { cartProducts, setCartProducts} = useContext(FetchContext);
       const { register, handleSubmit } = useForm();
       const onSubmit = data => {
        
        PostCart(data)

          setCartProducts([...cartProducts, data])
          localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

       }
  

       
        if(props.actions){
            const colors = props.actions.colors;
            const storages = props.actions.storages;
            return (
                <div className="actions-container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("id")} value={id} hidden/>
                        <select {...register("colorCode")}>
                            {colors.map((e)=> <option value={e.code}>{e.name}</option>)}
                        </select>
                        <select {...register("storageCode")}>
                            {storages.map((e)=> <option value={e.code}>{e.name}</option>)}
                        </select>
                        <input type="submit" value="Add to Cart"/>
                    </form>
                </div>
            )
        }
   }
   
   export default Actions