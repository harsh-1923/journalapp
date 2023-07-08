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
      <button
        onClick={() => {
          navigate("/editorv2");
        }}
      >
        EditorV2
      </button>
      <button
        onClick={() => {
          navigate("/editorv3");
        }}
      >
        EditorV3
      </button>
    </div>
  );
};

export default HomePage;
