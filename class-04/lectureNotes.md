# Lecture Notes

## display: inline
- puts an element *inline* with the other elements around it. Any height and width properties will have no effect.

## display: inline-block
- Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

- Also, with display: inline-block, the top and bottom margins/(maybe also left and right) paddings are respected, but with display: inline they are not.

- Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

## display: block
- Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width of it's containing element.

## positioning
- 2 types
  - static-type
  - relative-type positioning
    - relative
    - absolute
    - fixed

### Static is standard - where it normally sits

### Position Relative
Elements that are `position: relative` can be moved out of their normal flow position while still taking up the same space. This is achieved by utilising those offset properties (top, bottom, left, right) to offset the element, relative to itself.

### Position Absolute
Essentially does the same thing as position: relative, with two key differences:
The element is taken out of normal flow and leaves no space behind.
The element is positioned relative to its nearest parent with a relative-type (relative, absolute, fixed) positioning.

### Position Fixed
fixed is the same as absolute with one key difference:
The element is positioned relative to the viewport.


https://codepen.io/sarabeth-russert/pen/mdRBvbG

# Functions!!!

## what are they?
- a group of a statements that perform a task or calculate a value, that is stored within a structure that prevents them from running until we tell them to run... **Invoking** or **Calling**

## why?
- functions are REUSABLE
- help make the code dry
- PREVENT BUGS!

  pour ingredients into a bowl
  mix ingredients for 3 minutes
  pour the batter into a pan
  bake for 40 min at 350

  ```js
  function bakeACake() {
    pour ingredients into a bowl
    mix ingredients for 3 minutes
    pour the batter into pan
    bake for 40 min at 350
  }
 ```

 ### saturday
  bakeACake()

### sunday
  bakeACake()

### monday
  bakeACake()