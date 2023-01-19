import "./index.css";

const Button = ({ onHandleModal, isModalEnabled }) => {
  return (
    <div>
      <button
        onClick={onHandleModal}
        className={`Button ${isModalEnabled ? "active" : "passive"}  `}
      >
        +
      </button>
    </div>
  );
};

export default Button;
