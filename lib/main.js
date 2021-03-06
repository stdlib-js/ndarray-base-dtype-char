/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( '@stdlib/ndarray-base-dtype-resolve-str' );
var table = require( './table.js' );


// VARIABLES //

var TABLE;


// MAIN //

/**
* Returns the single letter character abbreviation for an underlying array data type.
*
* @param {*} [dtype] - data type value
* @returns {(Object|string|null)} single letter character abbreviation(s)
*
* @example
* var obj = dtypeChar();
* // returns {...}
*
* @example
* var ch = dtypeChar( 'float64' );
* // returns 'd'
*
* ch = dtypeChar( 'generic' );
* // returns 'o'
*/
function dtypeChar( dtype ) {
	if ( arguments.length === 0 ) {
		return table();
	}
	if ( TABLE === void 0 ) {
		TABLE = table();
	}
	return TABLE[ resolve( dtype ) ] || null;
}


// EXPORTS //

module.exports = dtypeChar;
