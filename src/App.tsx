import styled from "styled-components";
import Logo from "./assets/images/logo.jpeg";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from 'react';
import BlogModal from "./components/BlogModal";
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(prev => !prev);


  return (
    <StyledContainter>
      <StyledToBar>
        <img src={Logo} alt="logo" />
        <button onClick={handleClose}>Add Post</button>
      </StyledToBar>
      <div>
        <h2>Admin Dashboard</h2>
      </div>
      <StyledBlogContainer>
        <SingleBlogPost/>
        <SingleBlogPost/>
        <SingleBlogPost/>
        <SingleBlogPost/>
        <SingleBlogPost/>
      </StyledBlogContainer>
      <BlogModal show={show} handleClose={handleClose}/>
    </StyledContainter>
  );
}

const SingleBlogPost = () => {
  return (
    <StyleSinglePost>
      <h2>Blog Title</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div>
        <FaRegTrashCan/>
        <FaPencilAlt/>
        <FaEye />
      </div>
    </StyleSinglePost>
  );
};

const StyledContainter = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 15px;
`;

const StyledToBar = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #7f8c9f;
  padding-bottom: 15px;

  & > img {
    height: auto;
    width: 200px;
  }

  & > button {
    background-color: #01256b;
    color: #ffffff;
  }
`;

const StyleSinglePost = styled.article`
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 15px;

  & > div{
    display: flex;
    & :nth-child(2){
      margin: 0 8px;
    }
  }
`;

const StyledBlogContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export default App;
