'use strict';

var React = require('react');

var Header = require('./ui/Header.jsx');
var Footer = require('./ui/Footer.jsx');
var Marketing = require('./ui/Marketing.jsx');

var Timer = require('./ui/Timer.jsx');
var Todo = require('./ui/Todo.jsx');

var App = React.createClass({
  displayName: 'TheApp',
  render: function() {
    return (
      <div>
        <Header />
        <div className="jumbotron">
          <Todo />
          <Timer />
        </div>
        <Marketing />
        <Footer />
      </div>
    );
  }
});

var mountNode = document.getElementById('app');
React.render(<App />, mountNode);