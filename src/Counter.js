import { useEffect, useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log('test');
      setCount(current => current + 1)
    }, 1000);

    return () => {
      console.log('component unmount');
      clearInterval(intervalId)
    };
  }, []);

  return (
    <div className="App">
      current value: {count}
      <Button onClick={() => setCount(current => current + 1)} title="update count"></Button>
    </div>
  );
}