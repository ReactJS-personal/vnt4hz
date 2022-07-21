import { useEffect, useRef } from "react";

function useKey(key, cb) {
  const callback = useRef(cb);

  useEffect(() => {
    callback.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callback.current(event);
      } else if (
        (key === "ctrlv" && event.key === "v" && event.ctrlKey) ||
        (key === "ctrld" && event.key === "d" && event.ctrlKey) ||
        (key === "ctrlz" && event.key === "z" && event.ctrlKey)
      ) {
        callback.current(event);
      }
    }

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [key]);
}

export default useKey;
