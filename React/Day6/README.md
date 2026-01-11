Day-6 Topics

-> Component Lifecycle
-> React Routing

Topic 1: Component Lifecycle

Lifecycle = stages a component goes through from:
 creation → update → removal

OLD WAY — Class Components 
1)  Mounting (component appears on screen)

Runs once when component loads.

<pre>
componentDidMount() {
  // API calls
  // subscriptions
}
</pre>

2) Updating (props/state change)

Runs after re-render.

<pre>
componentDidUpdate(prevProps, prevState) {
  // compare old vs new
}
</pre>

<pre>
3) Unmounting (component removed)
componentWillUnmount() {
  // cleanup
}
</pre>

-> NEW WAY — Hooks

Lifecycle Mapping with useEffect
Class Lifecycle	Hook Equivalent
* componentDidMount	useEffect(() => {}, [])
* componentDidUpdate	useEffect(() => {}, [deps])
* componentWillUnmount	return () => {}

<pre>
useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
</pre>
 

Note: “useEffect combines all lifecycle methods into one API.”

Topic 2: React Routing 
What is Client-Side Routing?
-> Page does NOT reload
-> React switches components
-> Faster UX

* BrowserRouter
import { BrowserRouter } from "react-router-dom";

<pre>
<BrowserRouter>
  <App />
</BrowserRouter>
</pre>

-> Wraps the whole app
-> Enables routing

* Routes & Route
import { Routes, Route } from "react-router-dom";

<pre>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />} />
</Routes>
</pre>

 useParams (Dynamic routes)
 <pre>
<Route path="/user/:id" element={<User />} />
</pre>

const { id } = useParams();

Use case:
-> User profile
-> Product details

 useNavigate (Programmatic navigation)
const navigate = useNavigate();

navigate("/login");


Use cases:
-> After login
-> After form submit

* Logout redirect

 Protected Routes (INTERVIEW GOLD)
const ProtectedRoute = ({ children }) => {
  const isAuth = true;

  return isAuth ? children : <Navigate to="/login" />;
};

<pre>
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
</pre>

 * 404 Handling

 <pre>
<Route path="*" element={<NotFound />} />
</pre>

Note :Always keep at bottom