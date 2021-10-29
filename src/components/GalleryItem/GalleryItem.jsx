import axios from "axios";
import { useState } from "react";
import '../App/App.css';

function GalleryItem( props ){
    // const[ name, setName ]=useState( null );

    const[ show, setShow ]=useState( true );

    const[ likes, setLikes ]=useState( 0 );

    const changeShow = ()=>{
        setShow( !show );
    }

    const updateLikes = ()=>{
        setLikes( props.image.likes + 1);
        const data = { likes };
        console.log( 'in updateLikes' );
        axios.put( '/gallery/like/:id', data ).then( (data)=>{
            console.log( data );
          } ).catch( (err)=>{
            alert( 'nope' );
            console.log( err );
          })
    }

    return(
        <div>
            { show ?
            <img className="img" onClick={changeShow} src={ props.image.path } />:
            <p onClick={changeShow}> { props.image.description }</p>
            }
            <p></p>
            <button onClick={updateLikes}>Like This Image</button><p> Likes: { props.image.likes  }</p>
            
        </div>
    )
}

export default GalleryItem;