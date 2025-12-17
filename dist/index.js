/** @license Apache-2.0 */

'use strict';

/**
* Test if two single-precision floating-point numbers are the same value.
*
* @module @stdlib/number-float32-base-assert-is-same-value
*
* @example
* var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
* var isSameValue = require( '@stdlib/number-float32-base-assert-is-same-value' );
*
* var bool = isSameValue( toFloat32( 3.14 ), toFloat32( 3.14 ) );
* // returns true
*
* bool = isSameValue( toFloat32( -0.0 ), toFloat32( -0.0 ) );
* // returns true
*
* bool = isSameValue( toFloat32( -0.0 ), toFloat32( 0.0 ) );
* // returns false
*
* bool = isSameValue( toFloat32( NaN ), toFloat32( NaN ) );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
