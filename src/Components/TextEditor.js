import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import "./TextEditor.css";

function TextEditor() {
  const [text, setText] = useState("");

  //We need to save this in the database and then fetch it (and be able to update, edit, delete etc..)
  const parsedText = parse(text);

  return (
      <div className="editor-container">
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>
        {/* <div>
        <h2>Content</h2>
        <p>{parsedText}</p>
      </div> */}
      </div>
  );
}

export default TextEditor;
