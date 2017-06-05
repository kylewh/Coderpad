import styled from "styled-components";

const DescriptionWrapper = styled.div`
  box-sizing: border-box;
  width: calc(100% - 400px);
  margin-bottom: 1rem;
  @media all and (max-width:768px) {
    width: 100%;
  }
`;

export default DescriptionWrapper;
