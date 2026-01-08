Day-10 Topic

1. Render Props

A pattern where a component receives a function as a prop to decide what to render.

<pre>
 function MouseTracker({ render }) {
  const [x, setX] = useState(0);

  return (
    <div onMouseMove={e => setX(e.clientX)}>
      {render(x)}
    </div>
  );
}

Usage:
<MouseTracker render={x => <h1>{x}</h1>} />

</pre>

Why use it?

-> Share logic
-> Flexible rendering

Cons
-> Harder to read
-> Nested JSX