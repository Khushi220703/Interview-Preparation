Day-2 Topics

-> Virtual Dom
-> Batching
-> useState
-> useRef

Topic 1: Virtual Dom

* Virtual Dom is lightweight JS object representation of real Dom.
* React uses virtual dom which imporves performance of web application.

What happen here is:

When any change in the state and props happen the page re-renders and create a vitual dom.
It compares the chnages occured with the real dom chnages only the changed part in virtual dom of real dom.
at last ui updates

This is called reconillation.
for reconcillation it uses diffing algorthim with complextiy O(n).

Adv: 1. improve performance.
2. les expenive dom operation.
3. faster ui updates.

Disadv: extra space for virtual dom.

Topic 2: Batching

Batching means react group state update and render only once instead for every state update.

without batching this code:

setCount(c => c+1);
setCount(c => c+1);
setCount(c => c+1);

here 3 time re render 

while with batching this code renders only once as react group them togther.

if we write setCount(c+1) instead setCount(c = > c+1) it give wrong value as states in react are asyncronus all of them get same value while setCount(c=>c+1) latest value.


batching is use for performace optimization.

Topic 3: UseSate hook

* it is hook for components states.
* batched, asynchronus, cause re render.
* state of ui we can say changes shown on Ui too.

used for conditional rendering.
for implementing features such as form handling, conditional rendering, toggles etc.

syntax [counter, setCounter] = useState("")

counter -> get the state value.
setCounter -> set the satet.

type can be bool, string num ,arr, obj, null,

Topic 4: UseRef hook
* it does not cause re render 
* persits previous values.
* direct access to dom elements.
* store mutable values
* optimised performance.
* use for uncontrolled components.
