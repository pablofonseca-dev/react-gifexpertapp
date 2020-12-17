import {useEffect, useState} from 'react';
import getGifs from '../Helpers/getGifs';
export const useFetchGifs = (gifName) => {

    const [state, setState] = useState(
        {
            data: [], 
            loading: true,
        }
    );


    useEffect(() => {
        getGifs(gifName)
        .then(gifs => {
            setState({
                data: gifs, 
                loading: false
            });
        });
    }, [gifName]);

    return state; //{data:[], loading: true}
}