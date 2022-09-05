'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return `You and ${this.props.likes || 0} other(s) liked this.`;
    }

    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );

    // return (
    //   <button onClick={() => this.setState({ liked: true })}>
    //     Like
    //   </button>
    // );
  }

  // componentDidMount() {} --> Example setInterval
  // componentWillUnmount() {} --> clearInterval
}

// Usage:
// <LikeButton likes={10} />

const domContainer = document.querySelector('#react_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));
