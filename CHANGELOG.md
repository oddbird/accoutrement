# Accoutrement Changelog

## 2.1.0 - 12/20/18

- [Plugin: Color][color]
  - NEW: `contrast()`, `contrasted()`,
    `var-contrast()`, and `var-contrasted()`
    provide access to the lowest accessible contrast value,
    as well as than the (default) maximum contrast value.
    Pass a valid contrast ratio (`0-21`)
    or WCAG standard (`aaa`, `aa`, `aa-large`)
    to set a cutoff ratio,
    and return the minimum accessible color
  - NEW: `shades-of()` generates a range of light and dark color-shades
    to help build accessible themes based on a few origin colors
  - NEW: `stripe-colors()` function and mixin
    generate a color-stops or a full striped gradient background.
    This is useful for viewing the result from `shades-of()`

### 2.1.0-beta.1 - 12/13/18

- [Plugin: Color][color]
  - NEW: `var-contrast()` and `var-contrasted()`
    provide CSS variable parallels
    to `contrast()` and `contrasted()`
  - NEW: User-defined contrast defaults
    (`contrast-light` and `contrast-dark`)
    can be defined with or without the `_` private-color prefix
  - NEW: Contrast-related functions and mixins
    provide a smart second light-or-dark default option
    when only one is defined (previously an error)

## 2.0.0 - 12/05/18
The 2.0 release is primarily focused on
support for **CSS Custom Properties** (aka CSS Variables),
and access to nested-map tokens with `#outside->inside` syntax.
We've also added private tokens (`_token`),
and various tools for token-inspection.
All factory-default tokens (contrast-colors, named ratios, etc)
are now marked as private,
and will need to be called with a `_` prefix.
See the full details below.

Thanks to Joel Schou (@joelschou) for extensive contributions,
designing and testing several of these features.

- [Core][core]:
  - BREAKING: Explicit value/adjustments maps require a `'%value'` key
    (used to be named `'value'`),
    in order to avoid possible conflicts or false-positives
  - NEW (BREAKING alpha.1): all nested-map token references (using `->`)
    must be absolute paths from the map root,
    rather than assuming the most closely related
    sibling or ancestor value
  - BUGFIX (from alpha.1): Major improvements to compile time
    when parsing `->` syntax

### 2.0.0-alpha.1 - 10/29/18

- [Core][core]:
  - NEW: `$adjust-query-overlap` (`max` | `min` | `false`)
    allows you to control if and how media-queries are adjusted
    to avoid overlap between min/max queries
    (thanks to @joelschou)
  - NEW: Support for integrating accoutrement tokens & CSS variables
    with `tokens--()`, `token--()`, `var-token()`,
    and plugin-specific shortcuts
  - BREAKING: Token names starting with `_` or `-`
    are considered "private" to Sass,
    and will not be output when auto-generating CSS
    (variables, font-names, etc.)
  - BREAKING: Default ratio tokens are now prefixed with `_`
    (search/replace e.g. `minor-third` -> `_minor-third`)
    to avoid CSS-variable output
  - NEW: `is-private-token()` and `is-alias-for()` are now public functions,
    to help with token-inspection
  - BREAKING: Support for nested-map tokens with `->` syntax,
    both in `#hash->references` and `get-token($source, 'function->calls')`
    (thanks to @joelschou)
- [Plugin: Animate][animate]
  - BREAKING: Default easing tokens are now prefixed with `_`
    (search/replace e.g. `in-out-quad` -> `_in-out-quad`)
    to avoid CSS-variable output
  - NEW: Support for easing CSS variables with
    `easing--()`, `ease--()`, and `var-ease()`
  - NEW: Support for time CSS variables with
    `times--()`, `time--()`, and `var-time()`
  - NEW: Support for change CSS variables with
    `changes--()`, `change--()`, and `var-change()`
- [Plugin: Color][color]
  - BREAKING: `_contrast-light` and `_contrast-dark` colors are used
    for mixing `tint()` and `shade()`,
    with optional `$light`/`$dark` override parameters
    (thanks to @joelschou)
  - NEW: Default `_contrast-light` and `_contrast-dark` provided,
    set `_contrast-light`/`dark` in `$colors` to override
  - NEW: Support for CSS Variables with
    `colors--()`, `color--()`, and `var-color()`
- [Plugin: Layout][layout]
  - BREAKING: Default ratio tokens are now prefixed with `_`,
    see core for details
- [Plugin: Scale][scale]
  - BREAKING: Default ratio tokens are now prefixed with `_`,
    see core for details
  - NEW: Support for size CSS Variables with
    `sizes--()`, `size--()`, and `var-size()`
  - NEW: Support for ratio variables with
    `ratios--()`, `ratio--()`, and `var-ratio()`
- [Plugin: Type][type]
  - BREAKING: Non-map fonts are interpreted as font-stacks
  - BREAKING: Normalized font-data uses proper name-quotation,
    and ignores missing or private names/stacks
  - BREAKING: `import-webfonts()` no longer imports private fonts,
    but will import a direct alias of the private font
  - NEW: `import-webfonts()` accepts `$source` parameter
  - NEW: Support for CSS Variables with
    `fonts--()`, `font--()`, and `var-font()`

## 1.0.1 - 09/08/18
- [Core][core]:
  - BUGFIX: Typos, including the `cinema` ratio spelling
    (thanks to @joelschou)
  - BUGFIX: Improved consistency of nested-map parser
    (thanks to @joelschou)

## 1.0.0 - 08/08/18
- The stable 1.0 release is identical to `-beta.3`,
  see change details below

### 1.0.0-beta.3 - 08/03/18
- [Plugin: Scale][scale]
  - BUGFIX: `size()` function removes quotes from string (calc) sizes

### 1.0.0-beta.2 - 07/27/18
- [Core][core]:
  - NEW: `ratio()` function accepts `$source` argument,
    for passing in a custom source map
  - NEW: Improved error-handling and messages
  - NEW: Added `str-trim` and `str-split` aliases
    in addition to the existing `trim` and `split`
- [Plugin: Animate][animate]
  - NEW: `ease()`, `time()`, and `change()` functions all
    accept `$source` argument,
    for passing in a custom source map
- [Plugin: Layout][layout]
  - NEW: `break()` function accepts `$source` argument,
    for passing in a custom source map
  - NEW: `break()` function accepts `$scale` boolean,
    to turn off access to the scale-plugin `$sizes` map
  - NEW: `fluid-ratio()` function and mixin both accept `$source` argument,
    for passing in a custom source map
- [Plugin: Scale][scale]
  - BREAKING: `negative()` function and `square()` mixin
    both accept `$do` argument for on-the-fly adjustments --
    replacing the old `$units…` variable argument.
    Non-map `$do` values are converted to
    `('convert-units': $do)` before processing,
    to provide a shortcut for unit-conversions.
    `negative('root', 'cm')` will continue to work,
    but `negative('root', 'em', 10px)` should be changed to
    `negative('root', 'em' 10px)` (with all unit args in a single list)
  - NEW: `size()`/`negative()` functions and `square()` mixin
    accept `$source` argument, for passing in a custom source map
- [Plugin: Type][type]
  - NEW: `font()`/`font-family()` functions
    and `font-family()`/`font-face()` mixins
    accept `$source` argument,
    for passing in a custom font-source map

### 1.0.0-beta.1 - 07/18/18
- NEW: Add `_index.scss` to simplify default "tools" import (core + plugins)
  in Eyeglass: `@import 'accoutrement';`
- [Core][core]:
  - NEW: `get-token()` and `ratio()` functions accept `$do` argument,
    for on-the-fly adjustments
  - NEW: `trim($string)` utility now available in map-syntax,
    to trim white-space from the start and end of a string
  - NEW: `str-replace()` utility now forces arguments
    to `string`-type when appropriate,
    allowing e.g. `calc(16px + 1vw) ('str-replace': 1vw 2vw)`
- [Plugin: Animate][animate]
  - NEW: `change()`, `time()`, and `ease()` functions
    all accept `$do` arg for on-the-fly adjustments
- [Plugin: Color][color]
  - BREAKING: `color()` functions accept `$do` arg
    for on-the-fly adjustments – 
    *before* existing `$palette` argument
  - BREAKING: `$palette` argument renamed `$source`
    for consistency across plugins
- [Plugin: Layout][layout]
  - NEW: `break()` function accept `$do` arg
    for on-the-fly adjustments
- [Plugin: Scale][scale]
  - BREAKING: `size()` function `$units…` variable argument
    has been replaced with `$do` map argument,
    for flexible on-the-fly adjustments.
    Non-map `$do` values are converted to
    `('convert-units': $do)` before processing,
    to provide a shortcut for unit-conversions.
    `size('root', 'cm')` will continue to work,
    but `size('root', 'em', 10px)` should be changed to
    `size('root', 'em' 10px)` (with all unit args in a single list)
- [Plugin: Type][type]
  - BREAKING: `import-webfonts()` mixin no longer accepts any arguments
  - NEW: `font()` function provides access to parsed font-data
  - NEW: `'trim'` string helper strips whitespace
    from the start and end of a string
  - NEW: Improved font-normalization handles more font-map edge-cases
  - NEW: Font-stacks can be written as comma-delimited strings,
    e.g. `'Helvetica Neue, Helvetica, Arial'` or
    `'Helvetica Neue, Helvetica, Arial'`


## 0.1.0 - 07/12/18
- BREAKING: All modules now use a shared map syntax,
  with explicit `#tag` references
  and the option for explicit value/adjustment maps.
  [Learn the new syntax][core].
- NEW: Merges all existing Accoutrement plugins
- [Core][core]:
  - BREAKING: Internal map-reference now uses `#tag` syntax
  - NEW: Generic map-syntax, access, and parsing tools
    are shared by all plugins,
    and can be used with un-specified data types
  - NEW: Improved function-registration options
  - NEW: Math, modular-scale, string, and list utilities
    combined from the individual plugins
- [Plugin: Animate][animate]:
  - A totally new plugin!
- [Plugin: Color][color]:
  - BREAKING: See [core module][core] syntax changes
  - BREAKING: Removed `merge-colors()` function
- [Plugin: Layout][layout]:
  - BREAKING: See [core module][core] syntax changes
  - BREAKING: Ratio functionality merged into [Core][core],
    using the shared `$ratios` map,
    and `ratio()` function.
    The old `$aspect-ratios` and `aspect-ratio()` have been removed.
- [Plugin: Scale][scale]:
  - BREAKING: See [core module][core] syntax changes
  - BREAKING: String interpolation has moved into the [core][core]
    using function syntax `'%s and %s' ('%s': 'new1' 'new2')`
    rather than list syntax `'%s and %s' ('new1', 'new2')`
  - BREAKING: Math functions have moved into the core.
    The actual functions are now prefixed & private,
    but they are made available to Accoutrement maps
    under the additional aliases
  - New: Ratios have moved into the core,
    with additional defaults
- [Plugin: Type][type]:
  - BREAKING: See [core module][core] syntax changes
  - NEW: Allow space-separated string variants (`'500 italic'`)
    for weight and style, in addition to lists (`500 'italic'`)
  - NEW: Automatically formats font-family stacks
    with proper commas & quotations for CSS output


[core]: http://oddbird.net/accoutrement/docs/core.html
[init]: http://oddbird.net/accoutrement/docs/init.html
[animate]: http://oddbird.net/accoutrement/docs/animate.html
[color]: http://oddbird.net/accoutrement/docs/color.html
[layout]: http://oddbird.net/accoutrement/docs/layout.html
[scale]: http://oddbird.net/accoutrement/docs/scale.html
[type]: http://oddbird.net/accoutrement/docs/type.html


## Older Changelogs, from individual modules:
- [Accoutrement Init][IO]
- [Accoutrement Color][CO]
- [Accoutrement Layout][LO]
- [Accoutrement Scale][SO]
- [Accoutrement Type][TO]

[IO]: http://github.com/oddbird/accoutrement-init/blob/master/CHANGELOG.md
[CO]: http://github.com/oddbird/accoutrement-color/blob/master/CHANGELOG.md
[LO]: http://github.com/oddbird/accoutrement-layout/blob/master/CHANGELOG.md
[SO]: http://github.com/oddbird/accoutrement-scale/blob/master/CHANGELOG.md
[TO]: http://github.com/oddbird/accoutrement-type/blob/master/CHANGELOG.md
