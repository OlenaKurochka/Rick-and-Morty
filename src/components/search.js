import React, {useState} from "react";
import "../style/search.css"


const Search = ({ setSearch, updatePageNumber }) => {

  const [searchValue, setSearchValue] = useState(JSON.parse(localStorage.getItem("searchValue")));

  const onChangeHandler = event => {
    updatePageNumber(1); 
    setSearch(event.target.value);
    setSearchValue(localStorage.setItem('searchValue', JSON.stringify(event.target.value)));
  }


    return (
            <div className="header_container">
                <input onChange={onChangeHandler} value={searchValue} id="input_search" placeholder="Filter by name..." className="search" type="text"/>
            </div>
          );
};
  
  export default Search;