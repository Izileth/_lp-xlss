import { useState } from 'react';
import './index.css'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ap">
        <h1>Counter: {count}</h1>
        <div className='sb-ap'>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App;