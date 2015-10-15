'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Marketing',
  render: function() {
    return (
      <div id="content" className="row marketing">
       <div className="col-lg-6">
        <h4>HTML5 Boilerplate</h4>
        <p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>
       </div>
    </div>);
  }
});