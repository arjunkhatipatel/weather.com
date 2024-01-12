import { useContext } from "react";
import Context from "../Context/Context";

export default function Navbar({ toggleMode }) {
  const { theme } = useContext(Context);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          transitionDuration: "0.5s ",
          backgroundColor: theme === "dark" ? "#4c4c4c" : "#008b8b",
        }}
      >
        <div className="container-fluid">
          <span
            className="navbar-brand h1"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            Weather.Com
          </span>
          <i
            className={`fa-solid ${
              theme === "dark" ? "fa-sun" : "fa-moon"
            } fs-4 mx-2`}
            onClick={toggleMode}
            style={{ cursor: "pointer", transitionDuration: "0s !important" }}
          ></i>
        </div>
      </nav>
    </>
  );
}
