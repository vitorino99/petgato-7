import { SelectStyled } from "./style"


const Select = ({label, name, onChange, options, ...props}) => {

  return (
    <SelectStyled>
      <label htmlFor={name}>{label}</label>
      <select name={name} onChange={onChange} {...props}>
        {options.map(opt => 
        // selected={selected === 'value'}
          <option key={opt.value} value={opt.value}>
            {opt.value}
          </option>  
        )}
      </select>
    </SelectStyled>

    )
}

export default Select