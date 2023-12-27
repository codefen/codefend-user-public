import { createSignal, createRoot } from "solid-js";

function createCounter() {
  const [count, setCount] = createSignal(0);
  const incrementStart = () => setCount(0);
  const increment = () => setCount(count() + Math.floor(Math.random() * 21) + 10);
  const incrementMax = () => setCount(100);
  return { count, increment, incrementStart, incrementMax };
}

export default createRoot(createCounter);