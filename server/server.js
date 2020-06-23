// requires
const express = require( 'express' );
const app = express();
// globals
const port = 5000;
let inventory = [
    { name: 'drop of blood', size: 'tiny', color: 'red' },
    { name: 'cup of blood', size: 'small', color: 'red' }
]
// spin up server
app.listen( port, ()=>{
    // arrow functions are used on server
    console.log( 'server up:', port );
}) // end server up
// routes
app.get( '/', ( req, res )=>{
    console.log( 'in / GET' );
    res.send( inventory );
}) // end / GET