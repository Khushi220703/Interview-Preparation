Day-9 Topics

-> Custom Hooks
-> Hoc (Higher Order Component)

-> Topic 1: Custom Hooks:

* A custom hook is the normal js function.
* start with use
* no code duplication, reusable code, clean code

<pre>
  function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return { count, increment, decrement };
}

</pre>


Usage:
<pre>
  const { count, increment } = useCounter(0);

</pre>

-> Topic 2: Higher Order Component:

* A  function that takes a component and returns its enhanced version.

const EnhancedComponent = withAuth(Component);

Why HOC?

-> Share behavior across components
-> Cross-cutting concerns (auth, logging)

<pre>

function withAuth(WrappedComponent) {
  return function () {
    const isAuth = true;
    return isAuth ? <WrappedComponent /> : <p>Login required</p>;
  };
}

</pre>

* Pros

-> Logic reuse
-> Works with class components

* Cons

-> Wrapper hell
-> Harder to debug
-> Less common now

Note: replced with hooks.