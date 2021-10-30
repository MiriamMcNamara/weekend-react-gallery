const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require( './modules/pool' );
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('PUT route hit,', req.params);
    const queryString = `UPDATE gallery_items SET likes=likes+1 WHERE id=${req.params.id}`;
    console.log( queryString );
    pool.query( queryString ).then((results)=>{
        res.sendStatus( 200 );
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    }) 
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log( 'GET route hit');
    let queryString = 'SELECT * FROM gallery_items';
    pool.query( queryString ).then( (results)=>{
        console.log( results.rows );
        res.send( results.rows )
    }).catch( (err)=>{
        res.sendStatus( 500 );
    })
}); // END GET Route

module.exports = router;