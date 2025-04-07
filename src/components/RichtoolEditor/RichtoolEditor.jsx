import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichtoolEditor = ({ editorValue, onEditorChange }) => {

  const handleChange = (value) => {
    onEditorChange(value); 
  };

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['link'],
      [{ 'color': [] }, { 'background': [] }],
      ['blockquote'],
      ['code-block'],
      ['clean'],
    ],
  };

  return (
    <div>
      <ReactQuill
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        className="rounded-lg border p-4"
        theme="snow"
      />
    </div>
  );
};

export default RichtoolEditor;
