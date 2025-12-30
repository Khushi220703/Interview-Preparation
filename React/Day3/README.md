Day-2 Topics


-> UseEffect hook.

-> UseContext hook.

Topic 1: UseEffect hook.

* This hook is for running sideffects(things outside of rendering) in react.
* runs on mounting and updating
* need to clean up timers, intervals, events while unmounting to prevent memory leaks.
* used for logging, api calls, dom manipulations etc.


we can use it three ways..

1.
useEffect(()=>{

}) // it runs on every render. which leads to poor performance if not necesary.

2. 
useEffect(()=>{

},[]) // runs only once when mounting for the first time.

3.
useEffect(()=>{

},[dependency]) // runs only when depencies changes.

-> what is cleanup function..

useEffect(()=>{

  const id =  setInterval(()=>{
    console.log("hello");
  })

  return ()=>{
    clearInterval(id);
  }
},[]);

Topic 2: UseContext

* It is one of the solution for prop drilling (unnecessary sending props to other child component who dont need increase space).

<App>
  <Parent>
    <Child>
      <GrandChild />
    </Child>
  </Parent>
</App>
 
 here only grandChild need prop but we have to pass to parent and child which is useless.

* Allow sahring data globally.

-> create context.
const themeContext = createContext();  

-> provide context.
<themeContext.Provider name="khushbu">
 <Child/>
</themeContext.Provider>

-> consuming context.
const theme = useContext(theme);

adv: avoid prop drilling, clean code.
disadv: re-render all consumers so use redux for complex apps.










