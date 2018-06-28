Accoutrement-Color Changelog
============================

2.3.1 - 04/04/18
----------------
- BUGFIX: Fix typo in recursive `$function` lookup


2.3.0 - 04/03/18
----------------
- NEW: `$functions` map allows you to name/capture first-class functions
  in the latest versions of Sass, and call them by name in the `$colors` map


2.2.3 - 04/02/18
----------------
- BUGFIX: Support first-class functions (Sass 3.5+)


2.2.2 - 09/22/17
----------------
- BUGFIX: `color` function no longer chokes on self-reference
  in custom-palettes


2.2.1 - 09/13/17
----------------
- INTERNAL: Simplify get-function logic
- DOCS: Fix broken source link


2.2.0 - 09/05/17
----------------
- DOCS: Update theme, organize, and expand examples
- NEW: Added (private) `pow()` functions,
  so that MathSass is no longer a dependency for color-contrast calculations
- NEW: Support upper or lowercase for WCAG contrast checks in `contrast-ratio`,
  e.g. 'aa'/'aaa', or 'AA'/'AAA'
- NEW: Support first-class functions


2.1.2 - 08/26/17
----------------
- Docs: Update Herman, and simplify publication


2.1.1 - 05/21/17
----------------
- Docs: Remove unused mixin Sassdoc comment


2.1.0 - 03/08/17
----------------
- Support first-class functions in Sass 3.5.
- Add `merge-colors` function,
  and `add-colors` mixin
  to combine individual color palettes.
