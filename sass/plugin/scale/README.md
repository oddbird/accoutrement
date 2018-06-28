accoutrement-scale
==================

Sass size & scale management tools
by [OddBird][oddbird].
Gather all your sizes into a single map,
generate new sizes based on [modular scales][ms]
or arbitrary functions,
and access them by name.

[oddbird]: http://oddbird.net/
[ms]: http://www.modularscale.com/


More Accoutrement Tools
-----------------------

- [Init](http://oddbird.net/accoutrement-init/)
  provides light-weight browser-normalization.
- [Color](http://oddbird.net/accoutrement-color/)
  provides color-palette management and contrast-ratio utilities.
- [Type](http://oddbird.net/accoutrement-type/)
  provides webfont management tools,
  and other typography helpers.
- [Layout](http://oddbird.net/accoutrement-layout/)
  provides layout utilities such as
  box-sizing, intrinsic ratios, z-index management,
  named media-queries, and a clearfix.


Quick Start
-----------

Install the package with npm or yarn:

```bash
npm install accoutrement-scale
yarn add accoutrement-scale
```

Import the library:

```scss
@import '<path-to>/accoutrement-scale/sass/scale';
```

Establish your palette of ratios (modular scales) and sizes:

```scss
$ratios: (
  'my-ratio': 1.25,
);

$sizes: (
  // define explicit values
  'root': 24px,
  'icons': 1em,
  'page': 8in,

  // reference existing sizes
  'text': 'root'

  // apply adjustments and conversions
  // using named-ratios or arbitrary functions
  'rhythm': 'root' ('fifth': 1, 'convert-units': 'rem'),

  'h1': 'root' ('my-ratio': 3),
  'h2': 'root' ('my-ratio': 2),
  'h3': 'root' ('my-ratio': 1),

  // define calc() output based on existing sizes
  'viewport-relative': calc(%s + %s) ('root', 2vw),
);
```

Access your named sizes using the `size()` function,
and even convert-units on-the-fly:

```scss
.example {
  font-size('text');
  width: size('page', 'px');
}
```

We can only calculate integer steps along an exponential modular scale,
but if you want more power,
install [MathSass][mathsass],
and we'll let them do the hard math.

```scss
$sizes: (
  'complex': 'root' ('my-scale': 1.25),
);
```

[mathsass]: https://github.com/terkel/mathsass
