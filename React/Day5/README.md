
Day-5 Topics


* Styling in css.

The question is if we are writing js and html together then how we will css in react.

with the following way we can do that:

1. CSS Modules

Scoped CSS — class names are unique per component.

/* Button.module.css */
.btn {
  color: white;
}

/* Button.module.css */
.btn {
  color: white;
}

adv
* No class name collision
* Clean & maintainable
 
disadv
* Slightly more setup

2. Inline Styles

Styles written directly inside JSX as an object.

<button style={{ color: "red", fontSize: "16px" }}>
  Click
</button>

adv
* Quick for dynamic styles
* No external file

disadv
* No hover/media queries
* Messy for large apps

3. Styled Components 
CSS written inside JavaScript using tagged template literals.

import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: white;
`;

adv
* Component-scoped styling
* Dynamic props-based styles

disadv
* Extra library
* Runtime overhead

4. Conditional Styling
Changing styles based on state or props.


<button className={isActive ? "active" : "inactive"}>
  Click
</button>


Or inline:

<button style={{ color: isActive ? "green" : "red" }}>
  Click
</button>

Use cases:
* Active tabs
* Error states
* Disabled buttons
* Theme switching