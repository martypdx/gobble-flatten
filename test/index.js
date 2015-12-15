const gobble = require( 'gobble' );
const test = require( 'gobble-test' );
const path = require( 'path' );
const flatten = require( '../' );

test([
  {
    name: 'flatten',
    definition: gobble( path.join( __dirname, 'src' ) ).transform( flatten ),
    expected: path.join( __dirname, 'expected' )
  }
]);
