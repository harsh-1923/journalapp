import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.jsx";
import Editor from "./pages/Editor/Editor.jsx";
import EditorV2 from "./pages/EditorV2/EditorV2.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/editorv2" element={<EditorV2 />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
