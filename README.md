React
=====

Node v16.10.0


[React Chrome DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


React Technical
===============
**Plain JavaScript**:  

- You can use ES6, TypeScript, ...
- Augmented with JSX/TSX: _Composable_ HTML in JavaScript

Each JSX component composes part of the screen starting from a single root object.


**Declarative**:  
**One Way Data Flow**:  
**Virtual DOM**:  

No direct changes to the DOM.

React keeps its own Virtual DOM. The user updates the state, the render function is called and React calculates the minimum DOM manipulations required to update the browser.

(Rerender in O(n) using `key`.) 

Like a State Machine:  
Like a game engine: State changes, business rules get executed and the entire screen redrawn.
Done like this because DOM manipulation, like 3D Graphics, is what takes longest to process.

JSX/TSX
-------

class -> className, for -> htmlFor

```js
<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
```

**Event Handlers**: Abstracted away for IE8 and above with SyntheticEvent. One EventHandler attached at the root node. `this` set.  
`e.preventDefault()` and `e.stopPropagation()`





ReactElement
------------
**render** is required  
**displayName** is inferred  
**getDefaultProps** is cached  
**getInitialState** can use props  
**propTypes** checked only in development  
**state** should be immutable  
**props** should be immutable  
**mixins** are on the way out  
**statics** does exactly that  

_-- Life Cycle --_  
**componentWillMount** is invoked once before the initial render  
**componentDidMount** is invoked once immediately after the initial render (AJAX, timers, DOM manipulation, ...)

_-- after initial render --_  
**componentWillReceiveProps**(nextProps) to change state and rerender  
**shouldComponentUpdate**(nextProps, nextState) returns true by default  
**componentWillUpdate**(nextProps, nextState) do not use `this.setState()` here  
**componentDidUpdate**(prevProps, prevState) to operate on the DOM  
**componentWillUnmount** for cleanup  




**Props vs State:**  
Do not write to props  
Most components should be stateless  

_A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way._


Forms
-----
onChange  
e.preventDefault / e.stopPropagation  
value / defaultValue / defaultChecked  
--> Even value for textareas

```html
<select value="B">
	<option value="A">Apple</option>
	<option value="B">Banana</option>
	<option value="C">Cranberry</option>
</select>

<select multiple={true} value={['B', 'C']}>
```

Refs
----
Avoid (when possible)!  
Potential use: Working with legacy code

```js
render: function() {
    return <TextInput ref={(c) => this._input = c} />;
  },
  componentDidMount: function() {
    this._input.focus();
  },
```

ref as string is mostly legacy at this point:
```js
<input ref="myInput" />
var input = this.refs.myInput.value;
```

Other
-----

Context:  
https://facebook.github.io/react/docs/context.html




React Setup
===========

```ps1
npx create-react-app react-socks --template typescript
```
