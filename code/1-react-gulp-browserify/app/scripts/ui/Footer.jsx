'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Footer',
  render: function() {
    return (
      <div id="content" className="row marketing">
      <div className="footer">
        <p>&nbsp;♥ from the Yeoman team</p>
      </div>
    </div>);
  }
});