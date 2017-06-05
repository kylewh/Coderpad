import styled from "styled-components";

const Wrapper = styled.li`
  list-style: none;
  flex-grow: 1;
  margin: 10px 0;
  padding: 10px 0;
  background-image: linear-gradient(to right, #fff 50%, #FAFAFA 50%);
  background-size: 200%;
  transition: all 0.3s;
  &:hover {
    background-position: -100%;
  }
`;

export default Wrapper;
