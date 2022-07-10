import { Link} from "react-router-dom";
import "./breadcrumbs.scss"

const Breadcrumbs = () => {

    return (
        <div className="breadcrumb-container">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="#">Product name</Link>
        </div>
    )
}

export default Breadcrumbs