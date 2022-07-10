

const handleChange = (e) =>{
    console.log(e.target.value.length < 1)
}

const Search = () => {
    return(
        <input type="text" className="header-input" onChange={handleChange} />
    )

}

export default Search