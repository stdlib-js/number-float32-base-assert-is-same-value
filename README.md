<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isSameValuef

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if two single-precision floating-point numbers are the same value.

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float32-base-assert-is-same-value
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var isSameValuef = require( '@stdlib/number-float32-base-assert-is-same-value' );
```

#### isSameValuef( a, b )

Tests if two single-precision floating-point numbers `a` and `b` are the same value.

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );

var bool = isSameValuef( toFloat32( 3.14 ), toFloat32( 3.14 ) );
// returns true

bool = isSameValuef( toFloat32( 5.0 ), toFloat32( 3.0 ) );
// returns false
```

In contrast to the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

<!-- eslint-disable no-compare-neg-zero, use-isnan -->

```javascript
var bool = ( 0.0 === -0.0 );
// returns true

bool = isSameValuef( 0.0, -0.0 );
// returns false

bool = isSameValuef( -0.0, -0.0 );
// returns true

bool = ( NaN === NaN );
// returns false

bool = isSameValuef( NaN, NaN );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function implements the [SameValue Algorithm][ecma-262-same-value-algorithm] as specified in ECMAScript 5.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var isSameValuef = require( '@stdlib/number-float32-base-assert-is-same-value' );

var bool = isSameValuef( toFloat32( 3.14 ), toFloat32( 3.14 ) );
// returns true

bool = isSameValuef( toFloat32( 0.0 ), toFloat32( 0.0 ) );
// returns true

bool = isSameValuef( toFloat32( -0.0 ), toFloat32( 0.0 ) );
// returns false

bool = isSameValuef( toFloat32( NaN ), toFloat32( NaN ) );
// returns true
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/number/float32/base/assert/is_same_value.h"
```

#### stdlib_base_float32_is_same_value( a, b )

Tests if two single-precision floating-point numbers `a` and `b` are the same value.

```c
#include <stdbool.h>

bool v = stdlib_base_float32_is_same_value( 3.14f, 3.14f );
// returns true

v = stdlib_base_float32_is_same_value( 0.0f, -0.0f );
// returns false
```

The function accepts the following arguments:

-   **a**: `[in] float` first input value.
-   **b**: `[in] float` second input value.

```c
bool stdlib_base_float32_is_same_value( const float a, const float b );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/number/float32/base/assert/is_same_value.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
    const float a[] = {
        5.0f,
        -2.0f,
        0.0f,
        0.0f/0.0f
    };
    const float b[] = {
        5.0f,
        2.0f,
        -0.0f,
        0.0f/0.0f
    };

    bool v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = stdlib_base_float32_is_same_value( a[ i ], b[ i ] );
        printf( "Same value? %s\n", ( v ) ? "True" : "False" );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float32-base-assert-is-same-value.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float32-base-assert-is-same-value

[test-image]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float32-base-assert-is-same-value/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float32-base-assert-is-same-value?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float32-base-assert-is-same-value.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float32-base-assert-is-same-value/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/tree/deno
[deno-readme]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/tree/umd
[umd-readme]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/tree/esm
[esm-readme]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/number-float32-base-assert-is-same-value/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float32-base-assert-is-same-value/main/LICENSE

[ecma-262-same-value-algorithm]: http://ecma-international.org/ecma-262/5.1/#sec-9.12

</section>

<!-- /.links -->
