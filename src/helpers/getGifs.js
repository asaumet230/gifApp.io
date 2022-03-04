
const getGifs = async (search) => {

    const api_key = 'QdjJzFN6Yvo765XRb4vd3PdYnrryHq5U';
    const limit = 12;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${ encodeURI(search) }&limit=${limit}`;
    
    try {

    const resp =  await fetch(url);
    const { data } =  await resp.json();
    const gifs = data.map( gif => ({
        id: gif.id,
        image : gif.images.fixed_height,
        slug: gif.slug,
        title : gif.title,
        decription: gif.user? gif.user.description : "No hay descripción",
        download: gif.images.original_mp4.mp4
    }));

    return gifs;

    } catch (error) {
        throw new Error(error);
    }
}

export default getGifs;