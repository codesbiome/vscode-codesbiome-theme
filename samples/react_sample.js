import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const current_time = +new Date().getTime();
  return (
    <div className='timer'>
      <p>This is a normal functional component {current_time}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
