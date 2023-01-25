import NavBar from "../components/navbar";
import "./index.css";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <div className="mainLayoutBody">
        <NavBar />
        {children}
      </div>
      <footer>
        Terms of Service Privacy Policy Cookie Policy Accessibility © 2023
        Puddicino, Inc.
      </footer>
    </div>
  );
};

export default MainLayout;
