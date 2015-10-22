var React = require('react');
var ReactDOM = require('react-dom');

var blah;

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    {blah}
    <h1>Undefined</h1>
    {undefined}
    <h1>null</h1>
    {null}
  </div>,
  document.getElementById('example')
);