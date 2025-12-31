Day-4 Topics

-> Fetch

-> Axios

-> Loading & Error States

-> AbortController

-> Avoiding Infinite Loops in useEffect


Topic 1. Fetch

* Built in browser Api
* return promise
* need to manual parse json
* doesnot error http errors.

eg: fetch("/api/users")
  .then(res => res.json())
  .then(data => console.log(data));

Topic 2: Axios

* third party library.
* handles http errors
* need not to manually parse json
* less boilerplate and clean code

eg.axios.get("/api/users")
  .then(res => console.log(res.data));

Note: for large apps or prod level apps alwyays prefer axios.

Topic 3: Loading & Error States

These are just what to show when data is fetching from backend/api calling or error is showing
we need to show something to user not leave blank screen over there so we 

const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("/api")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error occurred</p>;


Topic 4: AbortController

Have you think what happen if an api is called but user remove the componet if not handled correlty may lead to memeory leak
hence we should abort the controller in the cleanup which cancels api when component unmount.

useEffect(() => {
  const controller = new AbortController();

  fetch("/api", { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name !== "AbortError") {
        console.error(err);
      }
    });

  return () => controller.abort();
}, []);

this arises in fetch while axios supports abortController.

Topic 5: Avoiding Infinite Loops in useEffect

Api calling should always be done in useEffect why?
As it is a side effect need to be done when ui rendered.

but we should do it properly so it may not lead to infinte loop

useEffect(() => {
  fetchData();
  setData(...);
}, [data]); //  infinite loop wrong as data changes

useEffect(() => {
  fetchData();
  setData(...);
}, []); // no infinite loop correct

