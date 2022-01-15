import { Container, ContainerPink } from "./styles"


const Loading = ({ isPink, ...props }) => {

  if (isPink) return <ContainerPink {...props} />

  return (<Container {...props} />)
}

export default Loading
