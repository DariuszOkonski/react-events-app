import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  children?: React.ReactNode;
  isSalesModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, isSalesModal }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#555",
          textAlign: "center",
        }}
      >
        {children ? children : <h3>No children were given</h3>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
