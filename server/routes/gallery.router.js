const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require( '../modules/pool' ); //make sure to replace server array with the database
//by requiring pool here


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
    let queryString = 'SELECT * FROM gallery_items ORDER BY id ASC'; //if you don't put
    //in and ORDER BY the images jump around weirdly
    pool.query( queryString ).then( (results)=>{
        console.log( results.rows );
        res.send( results.rows )
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    console.log( 'POST route hit');
    let queryString = 'INSERT INTO gallery_items ( path, description, likes ) VALUES ( $1, $2, $3 )';
    let values = [ req.body.path, req.body.description, req.body.likes ];
    pool.query( queryString, values ).then( (results)=>{
        res.sendStatus( 201 )
    }).catch( (err)=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}); // END POST Route

module.exports = router;