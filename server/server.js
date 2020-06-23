// requires
const express = require( 'express' );
const testModule = require( './modules/testModule' );
const app = express();
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    // arrow functions are used on server
    console.log( 'server up:', port );
}) // end server up
// routes
app.get( '/', ( req, res )=>{
    console.log( 'in / GET:', testModule );
    res.send( testModule );
}) // end / GET