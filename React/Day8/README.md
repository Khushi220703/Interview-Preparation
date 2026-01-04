

Day-7 Topics

-> Controlled Components
-> Uncontrolled Components
-> useRef in Forms
-> Validation Basics

Topic 1: Controlled Components

Definition:
Form inputs where React state controls the value.

<pre>

 function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

</pre>

How it works:

* Input value = React state
* Every keystroke → setState
* Component re-renders

Pros
-> Single source of truth
-> Easy validation
-> Easy to control UI (disable, reset, format)

Cons
-> More re-renders
-> Verbose for large forms

Use when
-> Complex forms
-> Live validation
-> Conditional UI

Topic 2: Uncontrolled Components

Form inputs where DOM manages the value, not React state.

<pre>

function Form() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

</pre>

How it works

* No state updates on typing
* Value accessed only when needed

Pros

-> Fewer re-renders
-> Simple
-> Better performance

Cons

-> Harder validation
-> Less control

Use when

-> Simple forms
-> Performance-critical inputs
-> Third-party libraries


Topic 3: useRef in Forms

Why useRef?

-> Access DOM directly
-> Avoid re-renders
-> Store mutable values

<pre>

const inputRef = useRef(null);

inputRef.current.focus(); // focus input
inputRef.current.value;   // read value

</pre>

Used for:

-> Uncontrolled inputs
-> Auto-focus
-> Scroll position
-> File inputs

Topic 4: Validation Basics


-> Required fields
-> Length validation
-> Format (email, phone)
-> Password rules

Where to validate?
	
onChange: Live feedback
onBlur: Better UX
onSubmit: Final check