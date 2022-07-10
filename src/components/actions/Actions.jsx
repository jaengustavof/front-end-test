import "./actions.scss"
import { useForm } from "react-hook-form";

const Actions = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="actions-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("storage")}>
                    <option value="test">test</option>
                    <option value="test">test</option>
                    <option value="test">test</option>
                </select>
                <select {...register("color")}>
                    <option value="black">black</option>
                    <option value="silver">silver</option>
                    <option value="white">white</option>
                </select>
                <input type="submit" value="Add to Cart"/>
            </form>
        </div>
    )
}

export default Actions