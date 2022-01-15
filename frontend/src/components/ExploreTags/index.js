
import Loading from "../Loading";
import { ExploreTagsStyled } from "./style";

const ExploreTags = ({ tags }) => {

  return (
    <ExploreTagsStyled>
      <h2>Explore essas tags:</h2>
      {tags.length === 0 ? 
      <Loading isPink /> 
      : (tags.map(tag => (
        <div className="tagResume" key={tag.id}>
          <h3 className="tagTitle">{tag.name}</h3>
          <p className="tagDescription">{tag.description}</p>
          <hr className="horizontalLine" />
        </div>
      )))}
    </ExploreTagsStyled>
  )
}

export default ExploreTags