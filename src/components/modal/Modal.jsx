import "./index.css";

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="overlay"></div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;
