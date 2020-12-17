const getGifs = async (gifName) => {
    const apiKey = "r926c1YK2TroOtNxEw7xsbpgpHNXo4D2";
    const contentRatingFlag = 'g'; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(gifName)}&rating=${contentRatingFlag}`; 
    const result = await fetch(url);
    const {data} = await result.json(); 
    const gifs = data.filter(img => {
                    const img_specific_data = img.images.downsized_medium;
                    if(img_specific_data.width >= 400 && img_specific_data.width <= 490){
                        return img; 
                    }
                    return null;
                }).map(img => {
                    if(img != null){
                        return {
                            id: img.id, 
                            title: img.title, 
                            url: img.images?.downsized_medium.url}
                    }
                    return null; 
                });
    return gifs;
}

export default getGifs; 