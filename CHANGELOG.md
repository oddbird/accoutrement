# Accoutrement Changelog


## 1.0.0 - UNRELEASED

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
