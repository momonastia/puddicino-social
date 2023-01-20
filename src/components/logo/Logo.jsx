import logo from "./puddicino-removebg-preview.png";
import "./index.css";

const Logo = () => {
  const LogoPic = <img src={logo} alt="" />;

  return <div className="Logo">{LogoPic}</div>;
};

export default Logo;
