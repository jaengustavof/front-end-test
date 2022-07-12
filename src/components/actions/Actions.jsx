import "./actions.scss"
import { useForm } from "react-hook-form";

const Actions = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const colors = props.actions.colors;
    const storages = props.actions.storages;
    return (
        <div className="actions-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("storage")}>
                    {colors.map((e)=> <option value={e.code}>{e.name}</option>)}
                </select>
                <select {...register("color")}>
                    {storages.map((e)=> <option value={e.code}>{e.name}</option>)}
                </select>
                <input type="submit" value="Add to Cart"/>
            </form>
        </div>
    )
}

export default Actions