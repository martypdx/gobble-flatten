var sander = require('sander');
var path = require('path');

function flatten( inputdir, outputdir, options ) {

	return sander.lsr( inputdir ).then( files =>
		Promise.all(
			files.map( file => sander
				.copyFile( inputdir, file )
				.to( outputdir, path.basename( file ) )
			)
		)
	);
}

module.exports = flatten;
