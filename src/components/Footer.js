import React, { useContext } from "react";
import Context from "../Context/Context";

const Footer = () => {
  const { theme } = useContext(Context);
  return (
    <footer
      class="text-center"
      style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: theme === "dark" ? "#4c4c4c" : "#008b8b",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div
        class="text-center p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <section>
          <a
            class="btn btn-link sbtn-floating btn-lg"
            href="https://x.com/arjunkhatipatel"
            role="button"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            class="btn btn-link sbtn-floating btn-lg"
            href="https://instagram.com/arjunkhatipatel"
            role="button"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-link sbtn-floating btn-lg"
            href="https://www.linkedin.com/in/arjunkhatipatel/"
            role="button"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            class="btn btn-link sbtn-floating btn-lg"
            href="https://github.com/arjunkhatipatel"
            role="button"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
        Made with ❤️ by{" "}
        <a
          style={{ color: theme === "dark" ? "white" : "black" }}
          href="https://ArjunPatel.tech/"
        >
          Arjun Patel
        </a>
      </div>
    </footer>
  );
};

export default Footer;
