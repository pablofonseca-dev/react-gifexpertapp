import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import './GifGridItem.css';

const GifGridItem = ({imageData}) => {
    return (
        <Fragment>
            <div className="grid-item animate__animated animate__fadeIn" key={imageData.id}>
                <img className="grid-item__image" src={imageData.url} alt={imageData.title}/>
                <h4 className="grid-item__title">{imageData.title}</h4>
            </div>
        </Fragment>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem
