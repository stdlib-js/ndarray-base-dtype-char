/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Interface describing an object mapping data type strings to single letter character abbreviations.
*/
interface Table {
	// Table properties:
	[key: string]: string;
}

/**
* Returns the single letter character abbreviation for an underlying array data type.
*
* @param dtype - data type
* @returns single letter character abbreviation
*
* @example
* var ch = dtypeChar( 'float64' );
* // returns 'd'
*
* ch = dtypeChar( 'generic' );
* // returns 'o'
*/
declare function dtypeChar( dtype: string ): string | null;

/**
* Returns an object mapping data type strings to single letter character abbreviations.
*
* @returns object mapping data type strings to single letter character abbreviations
*
* @example
* var obj = dtypeChar();
* // returns {...}
*/
declare function dtypeChar(): Table;


// EXPORTS //

export = dtypeChar;
