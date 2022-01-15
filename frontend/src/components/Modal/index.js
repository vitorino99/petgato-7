import { UlStyled } from "./styles"

const Modal = ({ showModal, children }) => {

  if (!showModal) return (<></>)

  return (<UlStyled>
    {children}
  </UlStyled>)
}

export default Modal