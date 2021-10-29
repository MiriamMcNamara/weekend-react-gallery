import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList( props ){
    // const[ name, setName ]=useState( null );

    return(
        <div>
            <h1>GalleryList</h1>
            <p> props: { JSON.stringify( props ) } </p>
            <GalleryItem />
        </div>
    )
}

export default GalleryList;