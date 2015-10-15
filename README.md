React High Level
================


React Technical
===============
**Plain JavaScript**:  

- You can use ES6, TypeScript, CoffeeScript, ...
- Augmented with JSX: _Composable_ HTML in JavaScript

Each JSX component composes part of the screen starting from a single root object.


**Declarative**:  
**One Way Data Flow**:  
**Virtual DOM**:  

No direct changes to the DOM.

React keeps its own Virtual DOM. The user/server updates the state, the render function is called and React calculates the minimum DOM manipulations required to update the browser.

(Rerender in O(n) using `key`.) 

Like a game engine: State changes, business rules get executed and the entire screen redrawn.
Done like this because DOM manipulation, like 3D Graphics, is what takes longest to process. 