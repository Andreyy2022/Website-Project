'use strict';

const root = ReactDOM.createRoot(document.getElementById('time-root'));

class Clock extends React.Component {
  render() {
    return (
      <span>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </span>
    );
  }
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);