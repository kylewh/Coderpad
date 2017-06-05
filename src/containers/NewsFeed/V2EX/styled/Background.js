import styled from "styled-components";

const Background = styled.div`
    background: #e2e2e2;
    padding-top: 20px;
    flex-grow: 1;
    heigth: auto;
    &:before {
      display: table;
      content: " ";
    }
`;

export default Background;
