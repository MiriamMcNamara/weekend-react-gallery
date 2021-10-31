import { useState } from "react";
import axios from 'axios';

function AddPic( props ){
    // const[ name, setName ]=useState( null );

    const[ currentPic, setCurrentPic ]=useState( {
        path: '',
        description: '',
        likes: 0
    } );

    const captureUrl = ( event ) => {
        console.log( 'in captureUrl', event.target.value );
        setCurrentPic( {...currentPic, path: event.target.value} );
    }

    const captureDescription = ( event ) => {
        console.log( 'in captureDescription', event.target.value );
        setCurrentPic( {...currentPic, description: event.target.value} );
    }
    const addPic = ()=>{
        console.log( 'in addPic');
        console.log( currentPic );
        axios({
            method: 'POST',
            url: '/gallery',
            data: currentPic
          }).then( (response)=>{
            props.getImages();
            //empty out input fields
          }).catch((err)=>{
             alert('POST Failed');
             console.log(err);
          })
        //this is where my axios POST route is going to go
    }

    return(
        <div>
            <h1>Add a Picture!</h1>
            <input type="text" placeholder="picture URL" onChange={ (event) => captureUrl( event )}  />
            <input type="text" placeholder="picture description" onChange={ (event) => captureDescription( event )} />
            <button onClick={addPic}>Add this pic!</button>
            {/* <p> props: { JSON.stringify( props ) } </p> */}
            <p>{}</p>
        </div>
    )
}

export default AddPic;