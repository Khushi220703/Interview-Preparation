
Day-7 Topics

-> Re-renders
-> Avoiding Unnecessary Re-renders
-> Memoization
-> React.memo
-> useMemo
-> useCallback 
-> Lazy Loading & Code Splitting

Topic 1: Re-renders

-> first of what is re-render:
React re-executes the component function to calculate UI again.

re-render not equal to dom update.

Cause of re-render/when re-render happens:

1. State change:
=> setCount(count + 1);

2. Props change:
=> <Child value={count} />

3. Parent re-renders → child re-renders

Note: React re-renders when state/props change

Topic 2:  Avoiding Unnecessary Re-renders

<pre>

function Parent() {
  const [count, setCount] = useState(0);

  return <Child onClick={() => console.log("hi")} />;
}

</pre>

-> Child re-renders every time because:
-> New function reference is created


Topic 3: Memoization

What is Memoization?

Caching a value or function so React doesn’t recompute it.

Topic 4️ React.memo (Component-level memoization)
const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <div>{value}</div>;
});


* Prevents re-render if props don’t change

Use case:
-> Heavy child components
-> Lists
-> Dashboards

=> Useless if props change every render

Topic 5 : useMemo (Value memoization)
Why useMemo?
Prevents expensive recalculations

const expensiveValue = useMemo(() => {
  return heavyCalculation(count);
}, [count]);


Memoizes result
-> Not for side effects

Use case:

-> Filtering large arrays
-> Expensive computations

Topic 6️. useCallback (Function memoization)
 
Prevents function reference change

const handleClick = useCallback(() => {
  console.log(count);
}, [count]);


 Used with React.memo

 Interview line: “useCallback is useMemo for functions.”

 Topic 7️. Keys in Lists (VERY COMMON TRAP )
 Wrong
items.map((item, index) => (
  <Item key={index} />
));

Correct
items.map(item => (
  <Item key={item.id} />
));


Why index is bad?
-> Breaks reconciliation
-> Causes wrong re-renders
-> UI bugs in dynamic lists


* “Keys help React identify which elements changed.”

Topic 8️. Lazy Loading & Code Splitting
Problems:
-> Big JS bundle
-> Slow initial load

Solution: React.lazy

<pre>
const Dashboard = React.lazy(() => import("./Dashboard"));

Suspense
<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense>

</pre>


* Loads component only when needed
* Improves initial performance

 Use case:
-> Routes
-> Large components
-> Dashboards