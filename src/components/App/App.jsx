import React, {useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

  const[ images, setImages ]=useState( [] );

  useEffect(()=>{
    console.log( 'component loaded ');
    getImages();
  }, [] );

  const getImages=()=>{
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
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList images={ images }/>
      </div>
    );
}

export default App;
