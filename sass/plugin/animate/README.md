Accoutrement-Animate
====================

**Sass animation/transition management by [OddBird][oddbird]…**

- Organize all your timing, easing, and transitions into maps
- Document relationships directly in the code

[oddbird]: http://oddbird.net/

OddBird's Accoutrement toolkits are designed around the idea
that code should be meaningful to both humans and machines –
opening the door for automation,
while improving or maintaining readability.
These tools integrate with [Herman][Herman],
our automated living pattern-library generator
built on [SassDoc][SassDoc].

[Herman]: http://oddbird.net/herman/
[SassDoc]: http://sassdoc.com/


**Other Accoutrement include…**

- [Color](http://oddbird.net/accoutrement-color/)
  provides color-palette management and contrast-ratio utilities.
- [Init](http://oddbird.net/accoutrement-init/)
  provides lightweight browser-normalization.
- [Scale](http://oddbird.net/accoutrement-scale/)
  helps manage scale patterns like font-sizes, margins, and gutters.
- [Type](http://oddbird.net/accoutrement-type/)
  provides webfont management tools,
  and other typography helpers.
- [Layout](http://oddbird.net/accoutrement-layout/)
  provides layout utilities such as
  box-sizing, intrinsic ratios, z-index management,
  named media-queries, and a clearfix.


Quick Start: Animation
----------------------

Install the package with npm or yarn:

```bash
npm install accoutrement-animate
yarn add accoutrement-animate
```

Import the library:

```scss
@import '<path-to>/accoutrement-animate/sass/animate';
```

Establish your timing and easing palettes:

```scss
$times: (
  'fast': 150ms,
  'medium': 'fast' ('times': 2),
);

$easing: (
  'elastic': cubic-bezier(0.5, -0.4, 0.5, 1.4),
  'fade-in': 'in-out-quad',
);
```

Access your timing & easing from anywhere:

```scss
.example {
  animation: slide-in time('fast') ease('in-out-quad') 1 both;
  transition-delay: time('fast');
  transition-duration: time('medium');
  transition-timing-function: ease('elastic');
}
```
