import React from "react";
import styled from "styled-components";
import { THEMES } from "../../components/THEMES";
import PageContainer from "../../components/UI/PageContainer";
import { Video } from "../../assets";
import { useSelector, useDispatch } from "react-redux";
import {
  requestCategories,
  receiveCategories,
  receiveCategoriesError,
} from "../../actions";
import { Link } from "react-router-dom";
import Spinner from "../../components/UI/Spinner";

const HomePage = () => {
  const dispatch = useDispatch();

  const CATEGORIES = useSelector((state) => state.DATA.categories);
  const STATUS = useSelector((state) => state.DATA.status);
  console.log(CATEGORIES);
  React.useEffect(() => {
    // This should be fetching "/items/category/:category"
    const URL = "/items/category";
    try {
      dispatch(requestCategories());
      fetch(URL)
        .then((res) => res.json())
        // .then((json) => console.log(json));
        .then((json) => dispatch(receiveCategories(json)));
    } catch (error) {
      console.log("error");
      dispatch(receiveCategoriesError());
    }
  }, []);

  if (STATUS === "loading" || !CATEGORIES) {
    return <Spinner />;
  }

  return (
    <>
      <VideoContainer>
        <VideoSrc loop autoPlay>
          <source src={Video} type="video/mp4" />
        </VideoSrc>
      </VideoContainer>
      <Categories>Categories</Categories>
      <Wrapper>
        <HeaderList>
          {CATEGORIES.map((cat) => {
            return (
              <Category key={cat}>
                <StyledLink to={`/items/category/${cat}`}>
                  <span>{cat}</span>
                </StyledLink>
              </Category>
            );
          })}
        </HeaderList>
      </Wrapper>
    </>
  );
};

const VideoContainer = styled.div`
  background: black;
`;
const VideoSrc = styled.video`
  width: 100%;
`;

const Categories = styled.div`
  font-size: 30px;
  margin: 10px 65px;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 30vh;
  margin-bottom: 5vh;
  margin-top: 5vh;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    height: 20vh;
  }
`;

const HeaderList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 1200px) {
    /* ... */
  }

  @media (max-width: 1024px) {
    /* width: 100%; */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Category = styled.button`
  /* flex: 1; */
  text-align: center;
  font-size: 1rem;
  padding: 12px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  background: lightgrey;
  color: black;
  transition: all ease-in 0.4s;
  border: 2px solid transparent;

  &:hover {
    color: blue;
    transform: scale(1.3);
  }

  & ${StyledLink} {
    font-size: 22px;
  }
`;

export default HomePage;
