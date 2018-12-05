# Sass Accoutrement

[![Build Status](https://travis-ci.org/oddbird/accoutrement.svg?branch=master)](https://travis-ci.org/oddbird/accoutrement)

**Robust design systems** require
*meaningful*, *readable*, *reusable* code.
These Sass utilities are designed to
help define and manage your design tokens
(colors, fonts, sizes, etc.)
in a format that can be understood
by both humans and parsers --
opening the door for automation,
while improving consistency and readability.
These tools also integrate with [Herman][Herman],
our automated living pattern-library generator
built on [SassDoc][SassDoc].

[Herman]: http://oddbird.net/herman/
[SassDoc]: http://sassdoc.com/

- [Official Site](http://oddbird.net/accoutrement/)
- [Documentation](http://oddbird.net/accoutrement/docs/)
- [Source Code](https://github.com/oddbird/accoutrement/)
- [Issues](https://github.com/oddbird/accoutrement/issues)

*Brought to you by [OddBird][oddbird] --
the creators of [Susy][susy],
[True][true],
and [Herman][herman].*

[oddbird]: http://oddbird.net/
[susy]: http://oddbird.net/susy/
[true]: http://oddbird.net/true
[herman]: http://oddbird.net/herman
[fonts]: http://oddbird.net/accoutrement/docs/type.html


## Installation

Install the package with npm or yarn

```bash
npm install accoutrement [--save-dev]
yarn add accoutrement [--dev]
```

Import what you need:

```scss
// core and all plugins (also available with `/index`)
@import '<path-to>/accoutrement/sass/tools';

// init normalization
@import '<path-to>/accoutrement/sass/init';

// individual plugins (core is required)
@import '<path-to>/accoutrement/sass/core';
@import '<path-to>/accoutrement/sass/plugin/<name>';
```

If you're using [Eyeglass](https://github.com/sass-eyeglass/eyeglass),
you can import the default "tools" (core + plugins) using only:

```scss
@import 'accoutrement';
```


## Usage

The accoutrement tools are built around
a shared data-storage syntax
using Sass "map" objects:

```scss
$map: (
  'root': 16px,
  'gutter': 1em,
);
```

Using a custom syntax,
we can extend maps to handle internal reference,
and functional adjustments --
capturing meaningful relationships
between design tokens:

```scss
$map: (
  'root': 16px,

  // internal reference & adjustments
  'gutter': '#root' ('_major-third': 1, 'convert-units': 'rem'),
);
```

Map storage serves a larger purpose:
- Related data is grouped explicitly,
  making the code more readable and maintainable
- The "single source of truth"
  encourages reusable design patterns
- Meaningful structure allows automation,
  from [automated style guides][herman]
  to automated functionality
  (provided in the plugins)

[herman]: http://oddbird.net/herman/
[type]: http://oddbird.net/accoutrement/docs/type.html


## [Core](http://oddbird.net/accoutrement/docs/core.html)

The **Core** module provides the generic
(non data-specific)
setup and syntax parsing:

- Retrieve & parse map values
  with the generic [`get-token()`][get] function
- Use our built-in [math][math], [modular-scale][ratio],
  [list][list], and [string][string] utilities
- Register your own first class [functions][functions],
  for reference inside data maps

[get]: http://oddbird.net/accoutrement/docs/core-get.html
[math]: http://oddbird.net/accoutrement/docs/core-math.html
[ratio]: http://oddbird.net/accoutrement/docs/core-ratios.html
[list]: http://oddbird.net/accoutrement/docs/core-lists.html
[string]: http://oddbird.net/accoutrement/docs/core-strings.html
[functions]: http://oddbird.net/accoutrement/docs/core-register.html


## [Init](http://oddbird.net/accoutrement/docs/init.html)

We provide light-weight browser-normalization,
as a distinct include.
This is not part of the `accoutrement/sass/tools` package
because it is the only module to produce
direct CSS output.


## Plugins…

While the core module handles generic data-management,
we also provide plugins for a few common data types:

- **[Animate](http://oddbird.net/accoutrement/docs/animate.html)** --
  Tools for managing CSS transitions and animations
- **[Color](http://oddbird.net/accoutrement/docs/color.html)** --
  Tools for managing CSS colors and contrast-ratios
- **[Scale](http://oddbird.net/accoutrement/docs/scale.html)** --
  Tools for managing CSS sizes: typographic scales, spacing, etc.
- **[Type](http://oddbird.net/accoutrement/docs/type.html)** --
  Tools for managing webfonts, generated content, and other text needs
