Day-1 topics 
-> What is React & why use it

-> SPA vs MPA

-> JSX (why not HTML)

-> Components (Function vs Class)

-> Props

-> State

-> One-way data binding


Topic 1. What is React & why use it?

-> What is React? 

* React is Javascript library.
* Making UI layer only
* SPA's (Single Page Application)

-> Why?

Problems with plain Js..
* Manual Dom manipulation make syntax complex and error prone while react syncs states and UI if state chnages Ui change too.
* Each Dom updates even if update in one Dom element while react update the particular branch of Dom that is changes.
 
* Break large applications to samll components.
* Increases reusability and scalabilty.
* Reusability means:  The react break the application into the samll components these componets can be duplicate at various pages so instead of writing the whole code make one component and use everwhere where requied.
* Scalailty means: Since the react break application into small components it is easy to add new components for new features and can integrate existing one componets in another bigger component.
* Suppots JSX.
* Virtual Dom ( making DOM updates easier).
* Large community.
* Centralized state handling (handle all the states at one place for a particular component).
* Better user experince.

Topic 2.  SPA vs MPA

SPA-> 
* Means Single Page Applications.
* Only one HTML page.
* Better User experince.
* Faster Dom manipualtion
* On changing the page no reload
Eg. Instagram.

MPA->
* Means Multi Page Applications.
* More than one HTML page.
* Slower Dom manipualtion
* page reload.
Eg. Amazon

Topic 3. JSX (why not HTML)

JSX: Javascript XML.
* Syntatic sugar for React.createElement();
Earlier we wrote:
if html is: <h1 className="title">Hello</h1>
so we do: React.createElement("h1",  { className: "title" },"Hello") return object it was hard to debugg
now JSX is converted to React.createElement();

 JSX:
* Help you write HTML in js file.
* Helps you write expressions, loops, constions and HTML elements in single file
* Make JS logic esaier and code less complex.
* Easy debugg.

Topic 4: -> Components (Function vs Class)

Componenets: It is reuseable UI block.
 A large application is broken to small parts called components.


two types:
1. Functional compoents (Modern way):

* Uses fucntion based logic..
* less code.
* support hooks
* faster development
* easy to debug
* imporved performance

2. Class compoents (Old way):

* Uses class based logic..
* compex code.
* dont support hooks
* slow development
* difficult to debug

-> Why React is component-based
* it reduce code duplication.
* reduce file size.
* Easy mainteninece and testing.
* Reuasbility.

Topic 5: Props

* Props are data passed from parent to child.
* Read only means in child component props can not be modified.
* Child can not change parent state.
* props passed from parent to child not child to parent.
We call it "One way data binding"..

Topic 6: State

* The data managed inside the component.
* Mutable
* Chnages in the state cause re render.
* Controlled by the component

Note: What is Ui State: data that controll Ui (loggedin or not, disabl button, modal).

Topic 7: One-way data binding
* Child can not change parent state.
* Ensure easier debugging, predictable ui.
* Parent -> Child (is ok)
* Child -> Parent (is not ok)











