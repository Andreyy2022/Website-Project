'use strict';

ReactDOM.render(
    React.createElement('h1', null, (new Date).toLocaleString()),
    document.getElementById('time-root')
  );