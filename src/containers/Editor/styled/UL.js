import styled from "styled-components";

const UL = styled.ul`
  position: fixed;
  top: calc(15vh - 15px);
  right: 0;
  display: flex;
  padding-right: 3vw;
  flex-direction: column;
  & svg {
    height: 30px !important;
    width: 30px !important;
    fill: #eee !important;
    cursor: pointer;
    margin: 10px 0;
  }

  & svg:hover {
    fill: #B0BEC5 !important;
  }

  & svg.active {
    fill: #78909c !important;
  }
`;

export default UL;
