//numbersapi.com/43/trivia

import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);
  /* Can have function as dependencies
   *  Have to be careful here just you create infinite calling
   *
   **/

  return state;
};
