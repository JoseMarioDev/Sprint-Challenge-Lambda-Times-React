## Self-Study/Essay Questions

- [] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
  PropTypes are used to typecheck our data. It's important because it's another way to prevent and catch bugs in our code.

- [] Describe a life-cycle event in React?

there are 3 phases to the React lifecycle:

1. Mounting - where the component is built. componentDidMount gets called.
2. Updating - setState is used to change data and force render
   3.UnMounting - component is removed from screen

- [] Explain the details of a Higher Order Component?

a HOC is a function that receives a component as an argument and returns a new component. They are useful in sharing information.

- [] What are three different ways to style components in React? Explain some of the benefits of each.

1. Styled Components - allows us to keep our styling, HTML(JSX) , and JS all in the same file.
2. Style libraries - using ReactStap or Materialize UI, this allows us to import pre-created components to make things easier, faster, and consistent.
3. class based styling - using something like Tailwind.css allows us to give our DOM elements classes to easily change our styling.
