import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import './AddCategory.css';

const AddCategory = ({setCategories, categories}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const categoryName = document.getElementById("categoryInput");
        let spaceCheckRegex = /^[^\s]*.+[^\s]$/gi;
        if(spaceCheckRegex.test(categoryName.value)){
            setCategories([...categories, categoryName.value]);
            setInputValue("");
        }
    }

    return (
        <Fragment>
            <form className="category-box" onSubmit={handleSubmit}>
                <input type="text" className="input" id="categoryInput" 
                placeholder="Search category" onChange={(e) => handleInputChange(e)} value={inputValue} autoComplete="off"/>
                <button className="button button--success">
                    <span className="button__description">Search</span>
                </button>
            </form>
        </Fragment>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired, 
    categories: PropTypes.array.isRequired
}

export default AddCategory;
