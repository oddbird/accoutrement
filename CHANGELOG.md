Accoutrement-Animate Changelog
==============================

v0.2.0 - UNRELEASED
-------------------
- NEW: Add support for managed easing functions
  using the `$easing` variable for storage,
  and `ease()` function for access.
- NEW: `add-easing()` and `merge-easing()` functions
  help with more detailed easing-map manipulations.
- NEW: Provide a classic set of cubic-bezier easing functions by default.
- NEW: Store transitions and animations in the `$changes` map,
  use string interpolation to create composite changes,
  and access them all through the `change()` function.
- NEW: `transition()` and `animate()` mixins provide
  apply stored change values to the coresponding CSS property.

v0.1.1 - 06/11/2018
-------------------
- BUGFIX: Documentation typos…

v0.1.0 - 06/11/2018
-------------------
- NEW: Initial setup, tests, docs, and function-handling utilities
- NEW: `$times` map allows naming, reference, and adjustment of times
- NEW: `add`/`plus`, `subtract`/`minus`, `times`/`multiply`, and `divide`
  functions provided for time adjustments
- NEW: `time()` function provides access to calculated `$times`
- NEW: `merge-times()` and `add-times()` for time-map management
