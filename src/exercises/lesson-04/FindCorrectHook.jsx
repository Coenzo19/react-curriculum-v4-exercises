// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';

export default function FindCorrectHook() {
  const count = useRef(0);
  const ref = useRef();

  function handleClick() {
    ref.current.innerText = `${(count.current += 1)} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={ref} onClick={handleClick}>
        0 Clicks
      </button>
    </div>
  );
}
