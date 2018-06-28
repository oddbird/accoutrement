Changelog
=========

3.0.2 – 09/13/17
----------------

- BUGFIX: Allow [accoutrement-scale](http://oddbird.net/accoutrement-scale/)
  adjustments on breakpoints, when the package is available


3.0.1 – 09/13/17
----------------

- Update docs.


3.0.0 – 09/12/17
----------------

- BREAKING: All pseudo-elements (box-sizing, cleafix) use proper `::` syntax.
- BREAKING: Nested items in the `$z-index` list start with `1` rather than `2`,
  so that `main, nav item dropdown, overlay`
  will generate indexes of `1, 2 1 2, 3` respectively.
  This matches more closely the way nested z-indexes work in the browser.
- BREAKING: Remove `$inherit` option from `box-sizing`
  (because it's a bad idea to inherit box properties).
  You can still replicate the behavior by setting box-sizing on the root,
  and passing `inherit` as an argument to the mixin.
- BREAKING: Remove `micro-clearfix` in favor of `clearfix` alias.
  The only other reliable clearfix is `overflow: hidden` -
  and we don't need a mixin for that.
- BREAKING: Remove `$accoutrement-query-context` and `_apply-query()`
  for lack of use-cases.
- BREAKING: Rename `$_a_ASPECT-RATIOS`
  to make it private, and signify that it remains constant.
- BREAKING: Remove automatic `browser-ems` conversion,
  in favor of explicit breakpoint values/units.
  For unit-conversion and more helpful size-utilities,
  see [Accoutrement-Scale](http://oddbird.net/accoutrement-scale/).
  Also remove `$_BROWSER-DEFAULT-FONT-SIZE`, since it's no longer needed.
- BREAKING: `rem` values are treated like `em` values
  when removing media-query overlap.
- BREAKING: Remove `stretch` mixins, as an over-specific use-case.
- NEW: Add a single `position` mixin using the common TRBL syntax
  to provide a shortcut for positioning properties
  (`top`, `right`, `bottom`, `left`, and `position`).


2.2.0 - 04/26/17
----------------

- BREAKING: Remove `1px` or `0.01em` from `max-` property queries,
  to remove potential overlap


2.1.1 - 04/17/17
-----------------

- BUGFIX: Improved logical hierarchy for accessing named querise
  across both `$breakpoints` and (accoutrement-scale) `$sizes`
- TESTING: Update True, and add tests for `_get-breakpoint`


2.1.0 - 05/23/16
-----------------

- NEW: Named z-index tools


2.0.0 - 02/25/16
-----------------

- BREAKING: Remove Bower support
- NEW: Named media-query tools
- NEW: Intrinsic ratio tools


1.1.0 - 05/13/15
-----------------

- NEW: Global box-sizing mixin
