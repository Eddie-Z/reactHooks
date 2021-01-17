import { useForm } from "./useForm";
import React, { useEffect, useState } from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

/** UseEffect
 *
 * useEffect renders everytime the component is generated
 * If you want function to be called less, you put something in dependency array
 *
 * DEPENDECY DOES A SHALLOW COMPARISON
 *
 * IF YOU PUT OBJECT, IT WILL BE CALLED EVERYTIME
 *
 * REPLACE COMPONENT DIDMOUNT UNMOUNT
 * =====================================================================
 *
 */
// const App = () => {
//   const [values, handleChange] = useForm({
//     email: "",
//     password: "",
//     firstName: "",
//   });

//   useEffect(() => {
//     console.log("render");
//   }, [values.email, values.password, values.firstName]);

//   return (
//     <div>
//       <input name="email" value={values.email} onChange={handleChange}></input>
//       <input
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       ></input>
//       <input
//         name="firstName"
//         value={values.firstName}
//         onChange={handleChange}
//       ></input>
//     </div>
//   );
// };

// export default App;

/** Clean up function
 *
 * Use return for cleanup function
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

//   const [showHello, setShowHello] = useState(true);

//   // useEffect(() => {
//   //   console.log("render");

//   //   return () => {
//   //     console.log("unmount");
//   //   };
//   // }, []);

//   return (
//     <div>
//       <button onClick={() => setShowHello(!showHello)}></button>
//       {showHello && <Hello />}
//       <input name="email" value={values.email} onChange={handleChange}></input>
//       <input
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       ></input>
//       <input
//         name="firstName"
//         value={values.firstName}
//         onChange={handleChange}
//       ></input>
//     </div>
//   );
// };

// export default App;

/** Practical Example Listeners
 * As many useEffects as you want
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

//   const [showHello, setShowHello] = useState(true);

//   useEffect(() => {
//     const onMouseMove = (e) => {
//       console.log(e);
//     };
//     window.addEventListener("mousemove", onMouseMove);
//     return () => {
//       console.log("unmount");
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     console.log("test");
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setShowHello(!showHello)}></button>
//       {showHello && <Hello />}
//       <input name="email" value={values.email} onChange={handleChange}></input>
//       <input
//         name="password"
//         value={values.password}
//         onChange={handleChange}
//       ></input>
//       <input
//         name="firstName"
//         value={values.firstName}
//         onChange={handleChange}
//       ></input>
//     </div>
//   );
// };

// export default App;

/** Use fetch hook
 *  UseEffect fires off one after another
 *  You can add functions as dependencies
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
//   const [count, setCount] = useState(0);
//   const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
//   //numbersapi.com/43/trivia

//   return (
//     <div>
//       <div> {!data ? "loading..." : data}</div>
//       <div>count: {count}</div>
//       <button onClick={() => setCount((c) => c + 1)}>increment</button>
//       <div>
//         <input
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
//       </div>
//     </div>
//   );
// };

// export default App;

/** PERSIST TO LOCAL STORAGE
 *
 *
 * =====================================================================
 *
 */
const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  //numbersapi.com/43/trivia

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div> {!data ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
        ></input>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
        ></input>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
};

export default App;
