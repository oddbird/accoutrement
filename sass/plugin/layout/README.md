Accoutrement-Layout
===================

Sass layout utilities
by [OddBird][oddbird].
Provides layout utilities
such as media-query helpers,
a float clearfix,
global box-sizing,
positioning shortcuts,
and fluid aspect ratios.

[oddbird]: http://oddbird.net/


More Accoutrement Tools
-----------------------

- [Init](http://oddbird.net/accoutrement-init/)
  provides light-weight browser-normalization.
- [Color](http://oddbird.net/accoutrement-color/)
  provides color-palette management and contrast-ratio utilities.
- [Scale](http://oddbird.net/accoutrement-scale/)
  helps manage scale patterns like font-sizes, margins, and gutters.
- [Type](http://oddbird.net/accoutrement-type/)
  provides webfont management tools,
  and other typography helpers.


Quick Start
-----------

Install the package with npm or yarn

```bash
npm install accoutrement-layout
yarn add accoutrement-layout
```

Import the library:

```scss
@import '<path-to>/accoutrement-layout/sass/layout';
```

Establish your media-query breakpoints,
or use sizes from [Accoutrement-Scale][scale] directly:

```scss
$sizes: (
  'page': 36rem,
);

$breakpoints: (
  'banner-text': 24em,
);
```

Access your breakpoints with
`above()`, `below()`, and `between()` mixins.
When possible `em` and `rem` units will be converted to
browser-default relative `em` sizes:

```
.banner-text {
  display: none;

  @include above('banner-text') {
    display: block;
  }
}

.container {
  @include below('page') {
    padding: .5em;
  }
}
```

We remove `.09em` or `1px`
from `max-width` queries,
to account for media-query overlap issues.

[scale]: http://oddbird.net/accoutrement-scale/docs/
