Accoutrement-Color
==================

**Sass color-palette management by [OddBird][oddbird]…**

- Organize all your colors into a single map, or set of maps
- Document color relationships directly in the code
- Automate [WCAG-appropriate][wcag] contrast checking
- Generate color-palette documentation with [Herman][Herman]

[oddbird]: http://oddbird.net/
[wcag]: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef

OddBird's Accoutrement toolkits are designed around the idea
that code should be meaningful to both humans and machines –
opening the door for automation,
while improving or maintaining readability.
These tools integrate with [Herman][Herman],
our automated living pattern-library generator
built on [SassDoc][SassDoc].

[Herman]: http://oddbird.net/herman/
[SassDoc]: http://sassdoc.com/


**Other Accoutrement include…**

- [Init](http://oddbird.net/accoutrement-init/)
  provides lightweight browser-normalization.
- [Scale](http://oddbird.net/accoutrement-scale/)
  helps manage scale patterns like font-sizes, margins, and gutters.
- [Type](http://oddbird.net/accoutrement-type/)
  provides webfont management tools,
  and other typography helpers.
- [Layout](http://oddbird.net/accoutrement-layout/)
  provides layout utilities such as
  box-sizing, intrinsic ratios, z-index management,
  named media-queries, and a clearfix.


Quick Start: Colors
-------------------

Install the package with npm or yarn:

```bash
npm install accoutrement-color
yarn add accoutrement-color
```

Import the library:

```scss
@import '<path-to>/accoutrement-color/sass/color';
```

Establish your color palette:

```scss
$colors: (
  // set explicit colors
  'brand-pink': hsl(330, 85%, 62%),
  'brand-light': #ddf,
  'brand-dark': #224,

  // reference existing colors
  'background': 'brand-light',
  'border': 'brand-dark',

  // make adjustments as needed, using color functions
  'link': 'brand-pink' ('shade': 25%, 'desaturate': 15%),
);
```

Access your colors from anywhere:

```scss
.example {
  border-color: color('border');
}
```

You can also define your colors in smaller maps,
and then add them to the global `$colors` variable
using the `merge-color()` function,
or `add-colors()` mixin.

```scss
$brand: (
  'brand-pink': hsl(330, 85%, 62%),
  'brand-light': #ddf,
  'brand-dark': #224,
);

$patterns: (
  'background': 'brand-light',
  'border': 'brand-dark',
  'link': 'brand-pink' ('shade': 25%),
);

// merge everything into the main $colors map…
@include add-colors($brand, $patterns);
```

We'll also help you calculate WCAG-appropriate color contrasts:

```scss
a:hover {
  // set a background, and get well-contrasted text
  @include contrasted('link');

  // or return a contrasting color for use anywhere…
  border-color: contrast('background');
}
```
