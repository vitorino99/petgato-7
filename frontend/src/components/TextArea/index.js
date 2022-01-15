import { TextAreaStyled } from "./style"


const TextArea = ({ text, label, name, onChange }) => {
  return (
    <TextAreaStyled >
        <label>{label}</label>
        <textarea id="messageField" name={name} placeholder={text} onChange={onChange} />
    </TextAreaStyled>
    )
}

export default TextArea;