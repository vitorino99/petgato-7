import { ButtonStyled } from "./style"

const Button = ({ children, isPink, fontSize='16pt', padding='15px 30px', ...props }) => {
  return (
    <ButtonStyled 
      {...props}
      style={{fontSize, padding, ...props.style}}
      className={isPink ? 'pink' : ''}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button