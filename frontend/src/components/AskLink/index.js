import { Link } from "react-router-dom"
import { PStyled } from "./style"

const AskLink = ({ ask, txtLink, to, ...props }) => {

  return (
    <PStyled {...props} >{ask}<Link className='link' to={to} >{txtLink}</Link></PStyled>
  )
}

export default AskLink