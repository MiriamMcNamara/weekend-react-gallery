import React, {useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

  const[ images, setImages ]=useState( [] ); //create a hook that's an empty array which will hold
  // the image data that's retrieved from the server

  useEffect(()=>{ //you need to import and call useEffect to call a function on page load
    console.log( 'component loaded ');
    getImages();
  }, [] ); //you have to add an empty array to the end of this or it will use up all your memory

  const getImages=()=>{ //function that gets the images from the server using axios GET
    axios.get( '/gallery' ).then( (response)=>{
      setImages( response.data );
    } ).catch( (err)=>{
      alert( 'nope' );
      console.log( err );
    })
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Me</h1>
        </header>
        <GalleryList images={ images } getImages={ getImages }/> 
      </div>
    ); //mount the component and send it props in the return; here we are passing
    // the image array from the server and the getImages function
}

export default App;
