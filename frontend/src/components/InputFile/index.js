import { useState } from 'react'
import { InputFileStyled } from './styles'

const InputFile = ({ type, name, onChange, defaultFilepath, ...props }) => {
  const [selected, setSelected] = useState(undefined)

  const handleSelected = e => {
    setSelected(e.target.value.slice(12))
    onChange(e)
  }

  return (<>
    <InputFileStyled>
      <label htmlFor={name} className="label-file">Escolha uma imagem de capa:</label>
      <label htmlFor={name}>Escolher arquivo</label>
      <input id={name} type={type} name={name} onChange={handleSelected} {...props} />
      <span>{selected ?? defaultFilepath ?? 'Nenhum arquivo escolhido'}</span>
    </InputFileStyled>
  </>)
}

export default InputFile