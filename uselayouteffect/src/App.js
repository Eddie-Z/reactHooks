import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useMeasure } from "./useMeasure";

/** GET VALUE FROM DOM NODE
 * useLayoutEffect fires synchronously after all DOM mutations.
 *
 *
 * To anyone who is struggling to understand the difference between useEffect and useLayoutEffect, it helped me a lot.
 * useEffect (Component > State Changes > Component Renders > Rendered Component is Printed on Screen > useEffect runs)
 * useLayoutEffect (Component > State Changes > Component Renders > useLayoutEffect runs > Rendered Component is Printed on Screen)
 *
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

  const [rect, inputRef2] = useMeasure([]);

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
          ref={inputRef2}
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
