import { useState, Fragment } from "react";
import { ModalDialog } from "./ModalDialog";

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setOpen(true)}>Open Dialog Model</button>

      {/* Re - Usable Modal Dialog Component with all possible fields */}

      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Create User"
        Content="Are you sure to perform this action ?"
      />
    </Fragment>
  );
}

export default Modal;
