'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./ui/Header.jsx');
var Footer = require('./ui/Footer.jsx');
var Marketing = require('./ui/Marketing.jsx');

// Show Timer.jsx first.
// -> Add loop here and props in Timer

var Todo = require('./ui/Todo.jsx');
var Timer = require('./ui/Timer.jsx');

var App = React.createClass({
  displayName: 'TheAmazingTodoApp',
  render: function() {
    var content = (
      <div>
        <div className="jumbotron">
          <Todo />
          <Timer />
        </div>
        <Marketing />
      </div>);

    return (
      <div>
        <Header />
        {content}
        <Footer />
      </div>);
  }
});

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);