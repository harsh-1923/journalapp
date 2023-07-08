import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Editor.css";

const OptionsBar = () => {
  return <div className="options-bar-wrapper">Options Bar</div>;
};

const Editor = () => {
  const [journalTitle, setJournalTitle] = useState("Journal Title");
  const [journalContent, setJournalContent] = useState("Enter your thoughts..");
  useEffect(() => {
    // Perform the update when journalContent changes
    data.content = journalContent;
    console.log(data);
  }, [journalContent]);
  const data = {
    title: journalTitle,
    content: journalContent,
  };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleTitleChange = (e) => {
    e.preventDefault();
    setJournalTitle(e.target.textContent);
    data.title = journalTitle;
    console.log(data);
  };

  const handleContentChange = (e) => {
    e.preventDefault();
    setJournalContent(e.target.textContent);
    console.log(journalContent);
    data.content = journalContent;
    // console.log(data);
  };
  return (
    <>
      <OptionsBar />
      <div className="editor-wrapper">
        {/* <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>

      <button
        type="button"
        onMouseDown={SpeechRecognition.startListening}
        onTouchStart={SpeechRecognition.startListening}
        onMouseUp={SpeechRecognition.stopListening}
        onTouchEnd={SpeechRecognition.stopListening}
      >
        Hold to speak
      </button>
      <p>{transcript}</p> */}
        <h1
          className="journal-title"
          contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={handleTitleChange}
        >
          {journalTitle}
        </h1>
        <p
          className="jounal-content"
          contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={handleContentChange}
        >
          {journalContent}
        </p>
      </div>
    </>
  );
};

export default Editor;
