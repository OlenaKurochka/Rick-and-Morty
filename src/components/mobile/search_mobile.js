import React from "react";
import "../../style/mobile/search_mobile.css"


const SearchMobile = ({ setSearch, updatePageNumber }) => {

    return (
            <div className="header_container_mobile">
                <input onChange={(e) => {
                  updatePageNumber(1); 
                  setSearch(e.target.value);
                }}
                placeholder="Filter by name..." className="search_mobile" type="text"/>
            </div>
          );
};
  
  export default SearchMobile;