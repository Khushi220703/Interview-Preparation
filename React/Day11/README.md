Day-11 Topic:

Topic 1: React keys

* When ever we render list in react, we should always add key to list items to identify them uniquely.
* They allow react to reuse DOM items effeciently instead of re-rendering everything.
* if keys are wrong, react may re-render wrong components, performace becomes worse.
* React matched key during reconcillation wrong key = wrong match.

Avoid index as key if list is dynamic requires reordering, deletion,insertion.

<pre>

function FruitList() {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Mango" },
  ];

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
}

export default FruitList;

</pre>

-> Wrong

<pre>

{fruits.map((fruit, index) => (
  <li key={index}>{fruit.name}</li>
))}

</pre>

-> Right

<pre>

const staticList = ["HTML", "CSS", "JS"];

{staticList.map((item, index) => (
  <li key={index}>{item}</li>
))}

</pre>


