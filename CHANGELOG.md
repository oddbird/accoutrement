# Accoutrement Changelog

## UNRELEASED

- INTERNAL:

  - fix bug
    ([oddbird#112](https://github.com/oddbird/accoutrement/issues/112)) in
    [`tokens.get()`](https://www.oddbird.net/accoutrement/docs/token-api#function--get)
    memorization
  - Upgrade dev dependencies.

- [Tokens][token]:

  - NEW: Add `$ignore-cache` parameter to `tokens.get()` function,
    in order to override the cached value of a token.

- [Sass Utilities][utils]:

  - NEW: Removed unnecessary string length checks in the
    [`split()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--split)
    function.

## 4.0.1 - 03/28/22

- INTERNAL: Upgrade dev dependencies.
- DOCS: Update modules list --
  [#111](https://github.com/oddbird/accoutrement/pull/111)

## 4.0.0 - 03/02/22

This is a major update, moving over to Sass modules,
and removing some features that no longer seem necessary.

In addition to fixing a bug with the handling of
non-alias `#` symbols, and implementing deep map merges
where appropriate, we also added some functionality around
compiling maps for export, and working with different
color palettes.

- BREAKING: Requires Sass modules, and other recent features of Dart Sass.
  Legacy versions of Sass (Node & Ruby) are no longer supported.
- BREAKING: The old "init" module, which provided lightweight
  browser normalization, is no longer included. We now recommend
  using [CSS Remedy](https://github.com/jensimmons/cssremedy). (_Note: If
  making the switch from Accoutrement/Init to CSS Remedy, you may need to
  reset the `margin` and `padding` of block elements to remove unwanted
  vertical space. And SVGs and other media may stack instead of displaying
  inline since CSS Remedy sets these to [`display: block`](https://github.com/jensimmons/cssremedy/blob/468e31a7eda599eea2003ed7983c190828ffb5fd/css/remedy.css#L129) by default._)
- BREAKING: The old "core" module has been broken into individual modules
  for [utilities][utils] (extending several Sass modules),
  [tokens][token] (the map syntax parser),
  [variables][vars] (converting Sass variables & maps to CSS custom properties),
  and [ratios][ratio] (for typographic scales and layout aspect ratios).
- BREAKING: Map [`multi-merge()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--multi-merge)
  utility and all `add-*` functions for adding one or more token maps
  (e.g. [`add-sizes()`](https://www.oddbird.net/accoutrement/docs/scale-sizes.html#mixin--add-sizes),
  [`add-colors()`](https://www.oddbird.net/accoutrement/docs/color-tokens.html#mixin--add-colors), etc)
  now perform a deep merge of the token maps. Previously a shallow
  merge was performed,
  [which could result in removing nested values from maps](https://github.com/oddbird/accoutrement/issues/50).
- INTERNAL: Limit files included in npm package.
- INTERNAL: Remove documentation static-site from Accoutrement repository.
- INTERNAL: Switch from Travis CI to GitHub Actions for CI.
- INTERNAL: Upgrade dev dependencies.

- [Animate][animate]:

  - NEW: `compile-*` functions provide an export option for respective token maps (see:
    [`compile-changes()`](https://www.oddbird.net/accoutrement/docs/animate-change.html#function--compile-changes),
    [`compile-easing()`](https://www.oddbird.net/accoutrement/docs/animate-ease.html#function--compile-easing), and [`compile-times()`](https://www.oddbird.net/accoutrement/docs/animate-times.html#function--compile-times)).
  - NEW: Named default easings are now available as
    [individual variables](https://www.oddbird.net/accoutrement/docs/animate-ease.html),
    (without the `_` prefix that is applied in token maps).

- [Color][color]:

  - NEW: [`compile-colors()`](https://www.oddbird.net/accoutrement/docs/color-tokens.html#function--compile-colors)
    function provides an export option for color token maps.
  - NEW: [`with-colors()`](https://www.oddbird.net/accoutrement/docs/color-tokens.html#mixin--with-colors)
    mixin allows the overriding of the global color palette for a section of contents.

- [Sass Utilities][utils]:

  - NEW: These functions are now available directly,
    as well as being registered in the map syntax.
  - NEW: [`multi-merge()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--multi-merge)
    function for merging multiple maps into a single map.
  - NEW: [`replace()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--replace)
    function for replacing a substring inside a larger string,
    or replacing the entirety of a string.
  - NEW: [`interpolate()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--interpolate)
    function returns a string with interpolated values
    replacing `%s` placeholders in a format string.
  - NEW: [`split()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--split)
    function for splitting a string into a list of strings, using the
    same logic as JavaScript's `split()` method.
  - NEW: [`trim()`](https://www.oddbird.net/accoutrement/docs/utils.html#function--trim)
    function trims whitespace from the start and end of a string.

- [Variables][vars]:

  - NEW: [`ident()`](https://www.oddbird.net/accoutrement/docs/vars.html#function--ident)
    function adds `--` and an optional prefix to any string,
    in order to generate a custom property identifier.
  - NEW: [`custom-props()`](https://www.oddbird.net/accoutrement/docs/vars.html#mixin--custom-props)
    mixin generates custom properties for every key/value pair in a map.

- [Tokens][token]:

  - NEW: A module just for the custom map syntax parser & function registration.
  - NEW: [`map-compile()`](https://www.oddbird.net/accoutrement/docs/token-compile.html#function--map-compile)
    and [`map-compile-with()`](https://www.oddbird.net/accoutrement/docs/token-compile.html#function--map-compile-with)
    functions for compiling tokens in Accoutrement maps and formatting
    them for static exports.
  - BREAKING: The [`$functions`](https://www.oddbird.net/accoutrement/docs/token-register.html#variable--functions)
    map no longer accepts alias references
    or any other aspects of the token syntax.
  - BREAKING: Ratios are no longer first-class adjustments
    (like functions) in the token syntax.
  - BREAKING:
    [`tokens.$handle-missing-keys`](https://www.oddbird.net/accoutrement/docs/token-config.html#variable--handle-missing-keys)
    defaults to `null`,
    and no longer supports the legacy `silent` option.
  - BREAKING: `get-token()` is renamed
    [`get()`](https://www.oddbird.net/accoutrement/docs/token-api.html#function--get),
    and only accepts bare token names (no `#` prefix),
    including the `outer->inner` nested token syntax.
  - NEW: The new [`compile()`](https://www.oddbird.net/accoutrement/docs/token-api.html#function--compile)
    function provides direct access to parse & resolve an arbitrary token value
    (including aliases with `#` prefix), rather than calling a specific token by name.
  - NEW: All the built-in Sass module functions are registered by default,
    as `<module-name>.<function-name>`.
  - NEW: [`has-token()`](https://www.oddbird.net/accoutrement/docs/token-inspect.html#function--has-token)
    function checks a map to see if the given token is defined,
    and supports the `outer->inner` nested token syntax.
  - NEW: [`plus()`](https://www.oddbird.net/accoutrement/docs/token-internal.html#function--plus)
    function adds two values
    together in Accoutrement maps.
  - NEW: [`minus()`](https://www.oddbird.net/accoutrement/docs/token-internal.html#function--minus)
    function subtracts one value from another in Accoutrement maps.
  - NEW: [`times()`](https://www.oddbird.net/accoutrement/docs/token-internal.html#function--times)
    function multiplies two values together in Accoutrement maps.
  - NEW: [`divide()`](https://www.oddbird.net/accoutrement/docs/token-internal.html#function--divide)
    function divides two values in Accoutrement maps.
  - NEW: [`modulo()`](https://www.oddbird.net/accoutrement/docs/token-internal.html#function--modulo)
    function divides two values in Accoutrement maps and returns the remainder.

- [Type][type]:

  - NEW: [`compile-fonts()`](https://www.oddbird.net/accoutrement/docs/type-fonts.html#function--compile-fonts)
    function provides an export option for font token maps.
  - NEW: The default value for `$content` in pseudo element
    mixins is an empty string.

- [Ratios][ratio]:

  - NEW:
    [`compile-ratios()`](https://www.oddbird.net/accoutrement/docs/ratio-tokens.html#function--compile-ratios) function provides an export option for ratio token maps.
  - NEW: Built-in [named ratios](https://www.oddbird.net/accoutrement/docs/ratios.html) are now available as
    individual variables, (without the `_` prefix that is applied in token maps).
  - NEW: [`is-ratio()`](https://www.oddbird.net/accoutrement/docs/ratio-tokens.html#function--is-ratio)
    function can be used to type-check ratios, including ratio tokens.

- [Scale][scale]:

  - NEW:
    [`compile-sizes()`](https://www.oddbird.net/accoutrement/docs/scale-sizes.html#function--compile-sizes)
    function provides an export option for size token maps.
  - NEW: [`scale()`](https://www.oddbird.net/accoutrement/docs/scale.html#function--scale)
    function applies a modular scale to any value, allowing you to move up or down
    the scale any number of steps.

- [Layout][layout]:
  - BREAKING: Removed `global-box-sizing`.
  - BREAKING: Removed `clearfix`.
  - BREAKING: Removed `fluid-ratio`.
  - BREAKING: Removed `position`. Can achieve the majority
    of functionality in CSS using
    [Inset](https://developer.mozilla.org/en-US/docs/Web/CSS/inset).

## 3.0.1 - 03/01/21

- INTERNAL: Upgrade dev dependencies.
- DOCS: Fix changelog typo.

## 3.0.0 - 02/22/21

- BREAKING: Change to `get-token()` return value when the key path cannot be
  resolved, and `$handle-missing-keys` is unset or `silent`: Maps along the
  missing key path are no longer interpolated into the returned string. This
  is part of the fix for #49. Use `$handle-missing-keys` for more precise
  missing subkey behavior.
  (Thanks to John Crim @johncrim)
- NEW/BREAKING: Font maps accept `display` key,
  which can be used to set `font-display` property for importing web-fonts.
  (thanks to André Schließer @schliesser)
- BUGFIX (#49): Using `get-token()` to resolve a missing key no longer errors
  when using dart-sass and `$handle-missing-keys` is unset or `silent`.
  Instead, the unresolved path is returned.
  (Thanks to John Crim @johncrim)
- BUGFIX (#61): Using `get-token()` to obtain a 2nd level or deeper submap no
  longer causes a fatal error when using dart-sass and `$handle-missing-keys`
  is `null`, `warn`, or `error`.
  (Thanks to John Crim @johncrim)
- INTERNAL: Run unit tests with dart-sass (in addition to node-sass, which was
  used prior).
  (Thanks to John Crim @johncrim)
- INTERNAL: Upgrade dev dependencies.
- DOCS (#53): Use `html` rather than `:root` for examples.
- DOCS: Wrong parameter name in `contrast-ratio()` function docs.

## 2.2.0 - 09/08/20

- NEW: (#41) Global `$handle-missing-keys` allows you to control exactly
  what should happen when a key look-up fails.
  The default `silent` provides backwards-compatible silent-failure.
  Other options include:
  - `null`: `get-token()` will return `null`, similar to Sass `map.get()`
  - `warn`: `get-token()` will return `null`, and also throw a warning
  - `error`: `get-token()` will throw an error if the value is not found
- NEW: `\\` (an escaped backslash) can be used to ignore (`\\#not-an-alias`)
  or end (`#alias\\not-part-of-alias`) a `#` reference
- INTERNAL: (#41) Major performance improvements to the token look-up algorithm

Huge thanks to James Camilleri (@jcamilleri13) for all the improvements here.

## 2.1.4 - 06/30/20

- DOCS (#54): Fix broken links in docs
- INTERNAL: Upgrade dev dependencies.

## 2.1.3 - 01/06/20

- Core:
  - BUGFIX (#46): Fixes `register-function()` usage with Sass module syntax

## 2.1.2 - 08/26/19

- Upgrade dev dependencies.
- Core:
  - BUGFIX (#36): Fixes an issue with `quote()` in dart-sass.
  - BUGFIX (#38): Fixes an issue with `false` values in maps.

## 2.1.1 - 01/04/19

- Core:
  - BUGFIX (#31): Fixes an issue with longhand map memoization

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

- Core:
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

- Core:
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

- Core:
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

- Core:
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
- Core:
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
    _before_ existing `$palette` argument
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
- NEW: Merges all existing Accoutrement plugins
- Core:
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
  - BREAKING: See [tokens][token] syntax changes
  - BREAKING: Removed `merge-colors()` function
- [Plugin: Layout][layout]:
  - BREAKING: See [tokens][token] syntax changes
  - BREAKING: Ratio functionality merged into Core,
    using the shared `$ratios` map,
    and `ratio()` function.
    The old `$aspect-ratios` and `aspect-ratio()` have been removed.
- [Plugin: Scale][scale]:
  - BREAKING: See [tokens][token] syntax changes
  - BREAKING: String interpolation has moved into the Core
    using function syntax `'%s and %s' ('%s': 'new1' 'new2')`
    rather than list syntax `'%s and %s' ('new1', 'new2')`
  - BREAKING: Math functions have moved into the core.
    The actual functions are now prefixed & private,
    but they are made available to Accoutrement maps
    under the additional aliases
  - New: Ratios have moved into the core,
    with additional defaults
- [Plugin: Type][type]:
  - BREAKING: See [tokens][token] syntax changes
  - NEW: Allow space-separated string variants (`'500 italic'`)
    for weight and style, in addition to lists (`500 'italic'`)
  - NEW: Automatically formats font-family stacks
    with proper commas & quotations for CSS output

[token]: https://www.oddbird.net/accoutrement/docs/tokens.html
[utils]: https://www.oddbird.net/accoutrement/docs/utils.html
[vars]: https://www.oddbird.net/accoutrement/docs/vars.html
[ratio]: https://www.oddbird.net/accoutrement/docs/ratio.html
[animate]: https://www.oddbird.net/accoutrement/docs/animate.html
[color]: https://www.oddbird.net/accoutrement/docs/color.html
[layout]: https://www.oddbird.net/accoutrement/docs/layout.html
[scale]: https://www.oddbird.net/accoutrement/docs/scale.html
[type]: https://www.oddbird.net/accoutrement/docs/type.html

## Older Changelogs, from individual modules:

- [Accoutrement Init][io]
- [Accoutrement Color][co]
- [Accoutrement Layout][lo]
- [Accoutrement Scale][so]
- [Accoutrement Type][to]

[io]: https://github.com/oddbird/accoutrement-init/blob/master/CHANGELOG.md
[co]: https://github.com/oddbird/accoutrement-color/blob/master/CHANGELOG.md
[lo]: https://github.com/oddbird/accoutrement-layout/blob/master/CHANGELOG.md
[so]: https://github.com/oddbird/accoutrement-scale/blob/master/CHANGELOG.md
[to]: https://github.com/oddbird/accoutrement-type/blob/master/CHANGELOG.md
