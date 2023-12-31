import React, { useEffect, useState, useRef } from "react";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import "./Editor.css";

const EditorV2 = () => {
  const [journalTitle, setJournalTitle] = useState("Journal Title");
  const [journalContent, setJournalContent] = useState("Enter your thoughts..");
  const [blocks, setBlocks] = useState([
    // Default block to start with
    {
      type: "text",
      content: "",
    },
  ]);
  const [focusedBlockIndex, setFocusedBlockIndex] = useState(-1);
  const newBlockRef = useRef(null);

  const handleContentChange = (e) => {
    e.preventDefault();
    setJournalContent(e.target.textContent);
  };

  const addTextBlock = () => {
    const newBlock = {
      type: "text",
      content: "",
    };
    // console.log(focusedBlockIndex, "focused");
    // setBlocks([...blocks, newBlock]);
    setBlocks((prevBlocks) => {
      console.log(prevBlocks, "prevBlock");
      const updatedBlocks = [...prevBlocks];
      if (focusedBlockIndex >= 0) {
        updatedBlocks.splice(focusedBlockIndex + 1, 0, newBlock);
      } else {
        updatedBlocks.push(newBlock);
      }
      return updatedBlocks;
    });
  };

  const addImageBlock = () => {
    const newBlock = {
      type: "image",
      content: "",
    };
    setBlocks([...blocks, newBlock]);
  };

  const addQuoteBlock = () => {
    const newBlock = {
      type: "quote",
      content: "",
    };
    setBlocks([...blocks, newBlock]);
  };

  const handleBlockChange = (index, updatedContent) => {
    const updatedBlocks = [...blocks];
    updatedBlocks[index].content = updatedContent;
    setBlocks(updatedBlocks);
  };

  const handleBlockDelete = (index) => {
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index, 1);
    setBlocks(updatedBlocks);
  };

  useEffect(() => {
    console.log(blocks); // Perform desired actions with the updated blocks
  }, [blocks]);

  return (
    <div className="editor-wrapper">
      <div className="blocks-bar">
        <button onClick={addTextBlock}>Add Text Block</button>
        <button onClick={addImageBlock}>Add Image Block</button>
        <button onClick={addQuoteBlock}>Add Quote Block</button>
      </div>
      <p
        className="journal-content"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={handleContentChange}
      >
        {journalContent}
      </p>
      <div className="blocks-container">
        {blocks.map((block, index) => (
          <>
            <div
              key={index}
              className={`block ${block.type}`}
              contentEditable="true"
              suppressContentEditableWarning={true}
              onFocus={() => {
                setFocusedBlockIndex(index);
                console.log(index, " in focus");
              }}
              onBlur={(e) => handleBlockChange(index, e.target.textContent)}
            >
              {block.content}
            </div>

            <button onClick={() => handleBlockDelete(index)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default EditorV2;
