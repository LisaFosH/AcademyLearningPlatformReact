import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import "./TextEditor.css";

function TextEditor() {
  const [text, setText] = useState("");

  return (
    <>
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
      <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>
    </>
  );
}

export default TextEditor;
