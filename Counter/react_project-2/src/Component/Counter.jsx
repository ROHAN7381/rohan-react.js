import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button className="a1" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
        <button className="a2" onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
