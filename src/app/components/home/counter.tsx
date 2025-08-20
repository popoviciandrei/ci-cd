"use client";

import { useState } from "react";

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState<number>(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
