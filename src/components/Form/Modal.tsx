/* 
  Re - Usable Modal Dialog Component.
  Scnerios Needs to Handle
    Pass Props
    Pass Header, Body, Footer Content
    Modal Dailog should close on ESC Key press and Clicking on outside Modal Dialog area
    Use createPortal API from React
    Write CSS 
    Write Unit Test Cases using Jest

*/

import { useState, Fragment, useEffect } from "react";
import { ModalDialog } from "./ModalDialog";

function Modal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      throw new Error("Can't render this component");
    }, 5000);
  }, []);

  // console.log(myvariable);

  const Footer = (
    <div>
      <Fragment>
        <button onClick={() => setOpen(false)}>Ok</button>
        <button onClick={() => setOpen(false)}>Cancel</button>
      </Fragment>
    </div>
  );

  return (
    <Fragment>
      <button onClick={() => setOpen(true)}>Open Dialog Model</button>
      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Create User"
        Content="Are you sure to perform this action ?"
        Footer={Footer}
      />
    </Fragment>
  );
}

export default Modal;
