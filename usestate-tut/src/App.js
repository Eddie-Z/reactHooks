import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useForm } from "./useForm";

/**
 *  function component
 * =====================================================================
 */

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

/**
 *  Dont call hooks inside loops, conditions or nested functions
 *  Can have a function that returns initial value.
 *  Computation that's very expensive, you can have it run once inital value
 * =====================================================================
 *
 **/

// function expensiveInitialState() {
//   //maybe a loop here
//   return 10;
// }

// const App = () => {
//   //const [state, setstate] = useState(() => 10);
//   const [state, setstate] = useState(() => expensiveInitialState()); // this returns an array but it is destructed
//   return <div>hey</div>;
// };

// export default App;

/**
 *  incrementer
 *
 * =====================================================================
 *
 **/

// const App = () => {
//   const [count, setCount] = useState(10);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <div>{count}</div>
//     </div>
//   );
// };

// export default App;

/**
 *  setCount, similar to setState, you can pass in a function. Pass in an updator function and it does the exact same thing
 *  GOOD for avoiding race condiitons
 * =====================================================================
 *
 **/

// const App = () => {
//   const [count, setCount] = useState(10);
//   return (
//     <div>
//       <button onClick={() => setCount((currentCount) => currentCount + 1)}>
//         +
//       </button>
//       <div>{count}</div>
//     </div>
//   );
// };

// export default App;

/** MORE ADVANCEDD
 *  IMPORTANT: No merging is done by setCount, so you will have to use ... operator to create clone of object and then overwrite it
 *  setCount, similar to setState, you can pass in a function. Pass in an updator function and it does the exact same thing
 *  GOOD for avoiding race condiitons
 * =====================================================================
 *
 **/

// const App = () => {
//   const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
//   return (
//     <div>
//       <button
//         onClick={() =>
//           setCount((currentState) => ({
//             ...currentState, //put object in
//             count: currentState.count + 1, // then overwrite count value
//           }))
//         }
//       >
//         +
//       </button>
//       <div>count 1:{count}</div>
//       <div>count 2:{count2}</div>
//     </div>
//   );
// };

// export default App;

/** INSTEAD OF 1 OBJECTS, USE 2 HOOKS.
 *  SIMPLIFIED
 *  IN GENERAL, IF UPDATING BOTH, USE OBJECT
 *  OTHERWISE USE TWO
 * =====================================================================
 *
 **/

// const App = () => {
//   const [count, , setCount] = useState({ count: 10 });
//   const [count2, setCount2] = useState({ count2: 20 });
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount((c) => c + 1);
//           setCount2((c) => c + 1);
//         }}
//       >
//         +
//       </button>
//       <div>count 1:{count}</div>
//       <div>count 2:{count2}</div>
//     </div>
//   );
// };

// export default App;

/** EMAIL EXAMPLE
 * THIS IS TIME CONSUMING FOR EACH FIELD
 * WE CAN EXTRACT THIS INTO A CUSTOM HOOK into useForm.js
 *
 * =====================================================================
 *
 */

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div>
//       <input
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       ></input>
//       <input
//         name="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       ></input>
//     </div>
//   );
// };

// export default App;

/** CUSTOM HOOK EXAMPLE
 *
 * WE CAN EXTRACT THIS INTO A CUSTOM HOOK into useForm.js
 * THIS IS WHERE HOOKS SHINE
 * =====================================================================
 *
 */

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange}></input>
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default App;
