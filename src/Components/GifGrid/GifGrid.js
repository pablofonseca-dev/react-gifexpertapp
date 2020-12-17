import React from 'react';
import { useFetchGifs } from '../../Hooks/useFetchGifs';
import GifGridItem from '../GifGridItem/GifGridItem';
import './GifGrid.css';

function GifGrid({gifName}) {
    const {data, loading: isLoading} = useFetchGifs(gifName);
    
    return (
        <>
            <h2>{gifName}</h2>
            {(isLoading) && <p animate__animated animate__flash>Loading</p>}
            <ul className="categories-grid">
                {
                    data.map((image) => <GifGridItem imageData={image}></GifGridItem>)
                }
            </ul>           
        </>
    )
}

export default GifGrid
