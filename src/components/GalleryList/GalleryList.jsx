import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList( props ){
    // const[ name, setName ]=useState( null );

    return(
        <div>
            <h1>&#x2728; Some pics from my life these days &#x2728;</h1>
            {props.images.map( image=>( <GalleryItem image={image} getImages={ props.getImages } />))}
        </div>
    ) //in the list component, map through the array to create an item component for each object
    //in the array. Send each item component the object and the getImages function via props
}

export default GalleryList;