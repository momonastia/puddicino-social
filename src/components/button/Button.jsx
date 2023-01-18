import "./index.css";

const Button = ({ onHandleModal }) => {
  return (
    <div>
      <button onClick={onHandleModal} className="Button">
        +
      </button>
    </div>
  );
};

export default Button;
