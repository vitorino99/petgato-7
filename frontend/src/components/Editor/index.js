import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import styled from 'styled-components'

const colors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
  "darkViolet"
]

const modules = {
  toolbar: [
    [{ 'font': [] }], [{ size: [], }],
    [
      "bold",
      "italic",
      "underline",
      "strike",
    ],
    [
      { color: colors },
      { background: colors },
    ],
    [
      { script: "sub" },
      { script: "super" }
    ],
    [
      { header: "1" },
      { header: "2" },
      "blockquote",
      "code-block"
    ],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    [{ direction: "rtl" }, { align: [] }],
    ["link", "image", "video", "formula"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true
  }
}

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "script",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "code",
  "align",
  "direction",
  "code-block",
  "formula"
]

const EditorStyled = styled.section`
  /* #editor {
    border: 1px solid #C882B4; */
  
    :focus {
      outline: 1px solid #BA66A3;
    }

    .ql-toolbar {
      border: 0;
      border: 1px solid #C882B4;
    }
    .ql-container {
      border: 0;
      border: 1px solid #C882B4;

      min-height: 300px;
    }
  /* } */
`

const Editor = ({ onChange, ...props }) => {

  return (
    <EditorStyled>
      <ReactQuill
        theme="snow"
        onChange={onChange}
        modules={modules}
        formats={formats}
        {...props}
      />
    </EditorStyled>
  )
}

export default Editor