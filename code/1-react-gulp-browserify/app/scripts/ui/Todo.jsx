'use strict';

var React = require('react');

var Todo = React.createClass({
  displayName: 'TodoForm',
  getInitialState: function() {
    return {items: [], text: ''};
  },
  _onChange: function(e) {
    this.setState({text: e.target.value});
  },
  _handleSubmit: function(e) {
    var nextItems = this.state.items.concat([this.state.text]);
    this.setState({items: nextItems, text: ''});
    e.preventDefault();
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <Todo.List items={this.state.items} />
        <form onSubmit={this._handleSubmit}>
          <input onChange={this._onChange} value={this.state.text} />
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