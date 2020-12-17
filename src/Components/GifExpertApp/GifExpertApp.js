import React, {Fragment, useState} from 'react';

import AddCategory from '../AddCategory/AddCategory';
import GifGrid from '../GifGrid/GifGrid';

import './GifExpertApp.css'
import './fonts.css'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <Fragment>
            <h1 className="main-header">Gif Expert App</h1>
            <AddCategory setCategories={setCategories} categories={categories}></AddCategory>
            {
                categories.map((value) => <GifGrid gifName={value}></GifGrid>)
            }
        </Fragment>
    )
}


export default GifExpertApp
