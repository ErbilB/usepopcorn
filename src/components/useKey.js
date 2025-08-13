import { useEffect, useRef } from "react";

export function useKey(setQuery, element, key) {
  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === element.current) return;

        if (e.code === "Enter" && key) {
          element.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );
  return;
}
