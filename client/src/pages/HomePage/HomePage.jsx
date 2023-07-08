import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      HomePage Check
      <button
        onClick={() => {
          navigate("/editor");
        }}
      >
        Editor
      </button>
    </div>
  );
};

export default HomePage;
