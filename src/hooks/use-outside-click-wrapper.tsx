import { useRef, useEffect } from "react";

interface Props {
  callback: Function;
  children: React.ReactNode;
}

// TODO: Replace any
function useOutsideWrapper(ref: any, callback: Function) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callback) callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideClickWrapper(props: Props) {
  const wrapperRef = useRef(null);
  useOutsideWrapper(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideClickWrapper;
