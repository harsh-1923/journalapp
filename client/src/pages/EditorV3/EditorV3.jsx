import React, { Fragment, div, useState, useEffect, useRef } from "react";
import "./EditorV3.css";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

//Text - Heading, Body, Subheading, UL, IL, Caption, Quote
const BlockType = {
  HEADING: "HEADING",
  BODY: "BODY",
  SUBHEADING: "SUBHEADING",
  UL: "UL",
  OL: "OL",
  CAPTION: "CAPTION",
  QUOTE: "QUOTE",
  IMAGE: "IMAGE",
};

const EditorV3 = () => {
  const [title, setTitle] = useState("Title..");
  const [blocks, setBlocks] = useState([
    {
      type: BlockType.BODY,
      content: "...",
      // order:
    },
  ]);

  const handleTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.textContent);
  };

  return (
    <div className="editorv3-wrapper">
      <div className="editorv3-navbar-wrapper fixed top-16 w-56 text-right">
        {/* <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="btn">
              <ChevronDownIcon className="drop-down-btn" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={div}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items>
              <Menu.Item>Test</Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu> */}
        <Menu>
          <Menu.Button>More</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">Invite a friend (coming soon!)</span>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div className="editorv3-content-window">
        <h1
          className="editorv3-title-text"
          contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={handleTitleChange}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default EditorV3;

// data = {
//   title: "",
//   blocks: [
//     {
//       type: Body.IMAGE,
//       url: "",
//     },
//     {
//       type: Body.BODY,
//       content: "jks dfljkhasd jkfhas;kljc hvkalsdj;fklasjddlfjk",
//     },
//     {
//       type: Body.CAPTION,
//       content: "jks dfljkhasd jkfhas;dlfjk",
//     },
//     {
//       type: Body.CAPTION,
//       content: "jks dfljkhasd jkfhas;dlfjk",
//     },
//     {
//       type: Body.CAPTION,
//       content: "jks dfljkhasd jkfhas;dlfjk",
//     },
//     {
//       type: Body.CAPTION,
//       content: "jks dfljkhasd jkfhas;dlfjk",
//     },
//   ],
// };
