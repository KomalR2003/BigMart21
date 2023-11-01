
import { Link } from "react-router-dom";
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"

const Categories = () => {
  return (
    <>
      <Wrapper>
       <ScreenHeader>
            <Link to='/dashboard/create-category' className="btn-dark">Add Categories <i className="bi bi-plus"></i></Link>
       </ScreenHeader>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type

        
      </Wrapper>
    </>
  )
}

export default Categories;