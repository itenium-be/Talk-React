'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Header',
  render: function() {
    return (
      <div className="header">
        <ul className="nav nav-pills pull-right">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <h3 className="text-muted">T4T React</h3>
      </div>
    );
  }
});