import { useState } from "react"
import Button from "../Button"
import Loading from "../Loading"
import { FormStyled } from "./style"


const Form = ({ onSubmit, submitBtnTxt, submitBtnPink, children }) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async e => {
    setIsLoading(true)
    await onSubmit(e)
    setIsLoading(false)
  }

  return (
    <FormStyled onSubmit={handleSubmit} >
      {children}
      <Button isPink={submitBtnPink} type='submit' style={{ marginTop: '30px' }} >
        {isLoading ? 
          <Loading isPink={!submitBtnPink} style={{ width: 'min-content' }} /> 
          : submitBtnTxt}
      </Button>
    </FormStyled>
  )
}

export default Form