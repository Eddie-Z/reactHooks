import { useForm } from "./useForm";
import React, { useEffect, useState, useRef } from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

/** STORING REFERENCE TO A COMPONENT
 * USE CASE: GETTING REFERENECE TO REACT COMPONENT
 * BE ABLE TO USE IT IMPERATIVELY CALL STUFF WITHOUT CAUSING RERENDER
 * =====================================================================
 *
 */
// const App = () => {
//   const [values, handleChange] = useForm({
//     email: "",
//     password: "",
//     firstName: "",
//   });
//   const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
//   const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
//   //numbersapi.com/43/trivia
//   const inputRef = useRef();

//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   return (
//     <div>
//       <div> {!data ? "loading..." : data}</div>
//       <div>count: {count}</div>
//       <button onClick={() => setCount((c) => c + 1)}>increment</button>
//       <div>
//         <input
//           ref={inputRef} //have reference to inputfield now
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//         ></input>
//         <input
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//         ></input>
//         <input
//           name="firstName"
//           value={values.firstName}
//           onChange={handleChange}
//         ></input>
//         <button
//           onClick={() => {
//             console.log(inputRef.current); //now this haodes references to the input dom n
//             inputRef.current.focus();
//           }}
//         ></button>
//       </div>
//     </div>
//   );
// };

// export default App;

/** STORE NUMBER TIMES OCOMPONENT HAS RENDERED
 *
 *
 * =====================================================================
 *
 */
// const App = () => {
//   const [values, handleChange] = useForm({
//     email: "",
//     password: "",
//     firstName: "",
//   });
//   const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
//   const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
//   //numbersapi.com/43/trivia
//   const inputRef = useRef();

//   const [showHello, setShowHello] = useState(true);

//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   return (
//     <div>
//       <div> {!data ? "loading..." : data}</div>
//       <div>count: {count}</div>
//       <button onClick={() => setCount((c) => c + 1)}>increment</button>
//       <div>
//         <button onCLick={() => setShowHello(!showHello)}>toggle</button>
//         {showHello && <Hello></Hello>}
//         <input
//           ref={inputRef} //have reference to inputfield now
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//         ></input>
//         <input
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//         ></input>
//         <input
//           name="firstName"
//           value={values.firstName}
//           onChange={handleChange}
//         ></input>
//         <button
//           onClick={() => {
//             console.log(inputRef.current); //now this haodes references to the input dom n
//             inputRef.current.focus();
//           }}
//         ></button>
//       </div>
//     </div>
//   );
// };

// export default App;

/** STORE NUMBER TIMES OCOMPONENT HAS RENDERED
 *
 *
 * =====================================================================
 *
 */
// const App = () => {
//   const [values, handleChange] = useForm({
//     email: "",
//     password: "",
//     firstName: "",
//   });
//   const inputRef = useRef();
//   const hello = useRef(() => console.log("hello"));

//   const [showHello, setShowHello] = useState(true);

//   return (
//     <div>
//       <>
//         <button onClick={() => setShowHello(!showHello)}>toggle</button>
//         {showHello && <Hello />}
//         <input
//           ref={inputRef}
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//         />
//         <input
//           name="firstName"
//           placeholder="first name"
//           value={values.firstName}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//         />
//         <button
//           onClick={() => {
//             inputRef.current.focus();
//             hello.current();
//           }}
//         >
//           focus
//         </button>
//       </>
//     </div>
//   );
// };

// export default App;

/** USE FETCH
 * CHECKING IF COMPONENT HAS UNMOUNTED
 * PROBLEM WHERE COMPONENT HAS BEEN UNMOUNTED AND YOu'RE TRYING TO SET STATE
 * =====================================================================
 *
 */
const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const [showHello, setShowHello] = useState(true);

  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
};

export default App;
