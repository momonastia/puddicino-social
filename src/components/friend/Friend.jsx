import "./index.css";

const Friend = ({ data }) => {
  const { image, firstName, lastName } = data;

  return (
    <div className="Friend">
      <img src={image} alt={lastName} />
      <div className="user-context">
        <p>{lastName}</p>
        <p>{firstName}</p>
      </div>
      <div className="status">
        <p>🟢</p>
      </div>
    </div>
  );
};

export default Friend;
