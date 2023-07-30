'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Вы возвращаетесь на главную страницу';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Вернуться на главную'
    );
  }
}

const domContainer = document.querySelector('#back-button-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
/*

let back = document.querySelector('#back-button-container');

back.addEventListener('click', function() {
  setTimeout()
});
*/
/*
function loadBack() {
  location.href='../website.html';
}
*/