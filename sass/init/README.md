accoutrement-init
=================

Light-weight browser normalization
by [OddBird][oddbird].
Loosely based on
[Sanitize][sanitize] and [Normalize][normalize].

[oddbird]: http://oddbird.net/
[sanitize]: github.com/10up/sanitize.css
[normalize]: https://github.com/necolas/normalize.css


More Accoutrement Tools
-----------------------

- [Color](http://oddbird.net/accoutrement-color/)
  provides color-palette management and contrast-ratio utilities.
- [Scale](http://oddbird.net/accoutrement-scale/)
  helps manage scale patterns like font-sizes, margins, and gutters.
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
npm install accoutrement-init
yarn add accoutrement-init
```

Import the library:

```scss
@import '<path-to>/accoutrement-init/sass/init';
```

**WARNING** This library writes CSS directly to your stylesheets.
There is no configuration, no mixins, no variables, and no functions.
