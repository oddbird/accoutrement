Accoutrement-Type
=================

Sass typography and webfont helpers
by [OddBird][oddbird].
Gather all your fonts into a single map,
access them by name,
and easily import the webfonts.
Also includes helpers for accessibility
and pseudo-elements.

[oddbird]: http://oddbird.net/


More Accoutrement Tools
-----------------------

- [Init](http://oddbird.net/accoutrement-init/)
  provides light-weight browser-normalization.
- [Color](http://oddbird.net/accoutrement-color/)
  provides color-palette management and contrast-ratio utilities.
- [Scale](http://oddbird.net/accoutrement-scale/)
  helps manage scale patterns like font-sizes, margins, and gutters.
- [Layout](http://oddbird.net/accoutrement-layout/)
  provides layout utilities such as
  box-sizing, intrinsic ratios, z-index management,
  named media-queries, and a clearfix.


Quick Start
-----------

Install the package with npm or yarn:

```bash
npm install accoutrement-type
yarn add accoutrement-type
```

Import the library:

```scss
@import '<path-to>/accoutrement-type/sass/type';
```

Configure your font settings:

```scss
// Define what webfont formats need importing
$font-formats: 'woff' 'ttf';

// Set the a path to your fonts directory
$font-path: '../fonts/';

$fonts: (
  // describe locally-hosted font files for import and access
  'heading': (
    'name': 'maven',
    'stack': ('helvetica', 'arial', sans-serif),
    'normal': 'maven/maven_pro_regular-webfont',
    'bold': 'maven/maven_pro_bold-webfont',
  ),

  // describe CDN fonts for access
  'body': (
    'name': 'Source Sans Pro',
    'stack': ('Helvetica Neue', 'Helvetica', 'Arial', sans-serif),
  ),

  // provide aliases for any font you need
  'alias': '#body', // create aliases when useful
);
```

Import one font at a time with `font-face()`
or all your local webfonts with `import-webfonts()`:

```scss
// Import one font by configuration key, with custom formats
@include font-face('body', 'otf' 'svg');

// Import all local fonts
@include import-webfonts;
```

Set your font-family anywhere,
using the semantic names you defined earlier:

```scss
html {
  @include font-family('body');
}

h1, h2, h3 {
  @include font-family('heading');
}
```
