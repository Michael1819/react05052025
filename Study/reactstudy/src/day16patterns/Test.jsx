import { useState, useEffect } from "react";

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(prev => !prev);
  }

  function handlers() {
    return {
      open,
      close,
      toggle
    }
  }
  return [isOpen, handlers];
}

export default function Test() {
  const [isDisable, handlers] = useDisclosure();

  

  return (

      <div disabled={isDisable} onClick={handlers.open}>
        <button>Button is {`${isDisable ? "disabled" : "enabled"}`}</button>
      </div>
    )
}
