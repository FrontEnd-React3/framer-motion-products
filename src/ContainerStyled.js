import styled from "styled-components";

export const StyledHeader = styled.header`
  background: red;
  p {
    color: black;
  }
  /* //see sass, nested SSheets */
  &:hover {background: blue}
`;
