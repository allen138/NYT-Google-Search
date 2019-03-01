import React from "react";

const SearchBar = props => {
        return (
            <div className="input-group col-xs-12 col-sm-12 col-md-12">
                <input
                onChange={props.handleInputChange}
                value={props.value} 
                className="form-control input-lg"
                name="search" 
                type="text" 
                placeholder="Search" 
                aria-label="Search" />
                <button onClick={props.handleFormSubmit} className="btn btn-outline-success btn-md" type="submit">Search</button>
            </div>
        )
}

export default SearchBar;