import "./list.scss"
import Search from "../../components/search/Search"
import Item from "../../components/item/Item";

const List = () => {
    return (
        <div className="list-view">
            <div className="list-view_search">
                <Search/>
            </div>
            <div className="list-view_container">
                <Item/><Item/><Item/><Item/><Item/><Item/><Item/><Item/><Item/>
            </div>
        </div>
    )
}

export default List;