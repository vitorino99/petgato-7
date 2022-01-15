import { InputStyled } from './styles';

const TextInput = ({ label, name, placeHolder, onChange, ...props }) => {
    return (
      <InputStyled>
        <label htmlFor={name}>{label}</label>
        <textarea
            placeholder={placeHolder}
            name={name}
            onChange={onChange}
            {...props}
        />
      </InputStyled>
    )
}

export default TextInput;
