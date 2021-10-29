import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

  const getImages=()=>{
    axios.get( '/gallery' ).then( (response)=>{
      console.log( response.data );
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
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <button onClick={getImages}>Get Images</button>
        <GalleryList />
      </div>
    );
}

export default App;
