import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useEffect, useState } from 'react';
import Counter from './Counter';
import TodoApp from './todoapp/TodoApp';

function App() {
  const [showCount, setShowCount] = useState(true);

  return (
    <TodoApp />

    // <div>
    //   {
    //     showCount && <Counter />
    //   }
    //   <button onClick={() => setShowCount(false)}>hide counter</button>
    // </div>
  );
}

export default App;
