import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import "./TextEditor.css";


class TextEditor extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    
  //We need to save this in the database and then fetch it (to be able to update, edit, delete etc..)

  return (
    <>
      <div className="editor-container">
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data=""
            onChange={(event, editor) => {
              const data = editor.getData();
            }}
          />
        </div>
        {<div>
        <h2>Content</h2>
        <p>{this.props.text}</p>
      </div>}
      </div>
    </>
  );
}


}


export default TextEditor;
