import { InputStyled } from "./style"


const Input = ({label, type, name, onChange, ...props}) => {
  return (
    <InputStyled>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={onChange} {...props} />
    </InputStyled>
    )
}

export default Input