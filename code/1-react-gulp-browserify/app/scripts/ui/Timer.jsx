'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Timer',
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  _tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this._interval = setInterval(this._tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this._interval);
  },
  render: function() {
    return (<div>Seconds Elapsed: {this.state.secondsElapsed}</div>);
  }
});