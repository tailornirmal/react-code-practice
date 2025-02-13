import { useEffect } from "react";
import PropTypes from "prop-types";
import "./ModalDialog.css";

export const ModalDialog = (props) => {
  // De structure props received
  const { open, onClose, title, Content, Footer, closeIcon } = props;

  useEffect(() => {
    console.log("call on every re render");
    const exitOnEsc = (e) => {
      if (e.key === "Escape" && open) {
        if (onClose) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", exitOnEsc);
    return () => {
      window.removeEventListener("keydown", exitOnEsc);
    };
  }, [open, onClose]);

  if (!open) {
    return false;
  }

  console.log("props receivd", props);
  return (
    open && (
      <div className="modalBackground">
        <div className="modalContainer">
          {title && (
            <div className="title">
              {title}
              <div className="titleCloseBtn">
                <button onClick={onClose}>{closeIcon ?? "X"}</button>
              </div>
            </div>
          )}

          <div className="body">{Content}</div>

          {Footer}
        </div>
      </div>
    )
  );
};

ModalDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  Content: PropTypes.node,
  closeIcon: PropTypes.node,
};
