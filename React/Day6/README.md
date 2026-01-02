Day-6 Topics

-> Component Lifecycle
-> React Routing

Topic 1: Component Lifecycle

Lifecycle = stages a component goes through from:
 creation → update → removal

OLD WAY — Class Components 
1)  Mounting (component appears on screen)

Runs once when component loads.

componentDidMount() {
  // API calls
  // subscriptions
}

2) Updating (props/state change)

Runs after re-render.

componentDidUpdate(prevProps, prevState) {
  // compare old vs new
}

3) Unmounting (component removed)
componentWillUnmount() {
  // cleanup
}

-> NEW WAY — Hooks

Lifecycle Mapping with useEffect
Class Lifecycle	Hook Equivalent
* componentDidMount	useEffect(() => {}, [])
* componentDidUpdate	useEffect(() => {}, [deps])
* componentWillUnmount	return () => {}

useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Unmounted");
  };
}, []);
 

Note: “useEffect combines all lifecycle methods into one API.”

Topic 2: React Routing 
What is Client-Side Routing?
-> Page does NOT reload
-> React switches components
-> Faster UX

* BrowserRouter
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>

-> Wraps the whole app
-> Enables routing

* Routes & Route
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />} />
</Routes>

 useParams (Dynamic routes)
<Route path="/user/:id" element={<User />} />

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

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

 * 404 Handling
<Route path="*" element={<NotFound />} />

Note :Always keep at bottom