import NavBar from "../components/navbar";
import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <NavBar />
      {children}
      <div>
        Terms of Service Privacy Policy Cookie Policy Accessibility © 2023
        Puddicino, Inc.
      </div>
    </div>
  );
};

export default MainLayout;
