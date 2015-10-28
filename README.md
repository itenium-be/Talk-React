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

Like a State Machine:  
Like a game engine: State changes, business rules get executed and the entire screen redrawn.
Done like this because DOM manipulation, like 3D Graphics, is what takes longest to process.

JSX:  
class -> className
<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />

Spread Operator:  
var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // `other` contains { onClick: console.log } but not the checked property
    return (
      <div {...other} className={fancyClass} />
    );
  }
});
ReactDOM.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.getElementById('example')
);

Event Handlers: Abstracted away for IE8 and above with SynctheticEvent. One EventHandler attached at the root node. `this` set.  
`e.preventDefault()`





ReactElement:  
displayName is inferred
getDefaultProps is cached
propTypes check only in development
state should be immutable
props should be immutable
Mixins is on the way out

Props vs State:  
Do not write to props  
Most components should be stateless  

A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.


React.createClass({
  propTypes: {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode: React.PropTypes.node,

    // A React element.
    optionalElement: React.PropTypes.element,

    // You can also declare that a prop is an instance of a class. This uses
    // JS's instanceof operator.
    optionalMessage: React.PropTypes.instanceOf(Message),

    // You can ensure that your prop is limited to specific values by treating
    // it as an enum.
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // An object that could be one of many types
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // An array of a certain type
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // An object with property values of a certain type
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // An object taking on a particular shape
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // You can chain any of the above with `isRequired` to make sure a warning
    // is shown if the prop isn't provided.
    requiredFunc: React.PropTypes.func.isRequired,

    // A value of any data type
    requiredAny: React.PropTypes.any.isRequired,

    // You can also specify a custom validator. It should return an Error
    // object if the validation fails. Don't `console.warn` or throw, as this
    // won't work inside `oneOfType`.
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  },
  /* ... */
});


ES6
---
https://facebook.github.io/react/docs/reusable-components.html#es6-classes

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
ReactDOM.render(<HelloMessage name="Sebastian" />, mountNode);


export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };



Forms
-----
onChange
e.preventDefault / e.stopPropagation
value / defaultValue / defaultChecked
--> Even value for textareas

<select value="B">
	<option value="A">Apple</option>
	<option value="B">Banana</option>
	<option value="C">Cranberry</option>
</select>

<select multiple={true} value={['B', 'C']}>

Refs
----
Avoid!

render: function() {
    return <TextInput ref={(c) => this._input = c} />;
  },
  componentDidMount: function() {
    this._input.focus();
  },

ref as string is mostly legacy at this point:  
<input ref="myInput" />
var input = this.refs.myInput.value;


Other
-----
Context: for current language?
https://facebook.github.io/react/docs/context.html