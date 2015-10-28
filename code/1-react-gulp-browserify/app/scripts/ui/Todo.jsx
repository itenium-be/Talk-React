'use strict';

var React = require('react');

// ref

var Todo = React.createClass({
  displayName: 'TodoForm',
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  _handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <Todo.List items={this.state.items} />
        <form onSubmit={this._handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add # ' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

Todo.List = React.createClass({
  displayName: 'TodoList',
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.string)
  },
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

module.exports = Todo;