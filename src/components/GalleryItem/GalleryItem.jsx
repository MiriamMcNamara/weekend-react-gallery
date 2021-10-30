import axios from "axios";
import { useState } from "react";
import '../App/App.css';

function GalleryItem( props ){
    // const[ name, setName ]=useState( null );

    const[ show, setShow ]=useState( true ); //create a hook to use to toggle the image

    const changeShow = ()=>{ //create a function to toggle the image
        setShow( !show );
    }

    const updateLikes = ()=>{ //create a function to make an axios PUT request
        // that will add a like each time the like button is clicked
        console.log( 'in updateLikes' );
        axios.put( `/gallery/like/${props.image.id}` ).then( (response)=>{
            console.log( response.data );
            props.getImages(); //here is where we will call the getImages function to 
            //update the component's information each time the button is clicked
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
            <button onClick={updateLikes}>Like This Image</button>
            <p> Likes: { props.image.likes  }</p>
            
        </div>
    ) // add onClick functions to the image that includes conditional rendering; add
    //an onClick function to the likes button that updates the likes
}

export default GalleryItem;