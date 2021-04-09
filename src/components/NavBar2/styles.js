import styled from "styled-components";

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  letter-spacing: 20px;
  margin-top: 5px;
  padding-left: 20px;
  @media (max-width: 1024px) {
    justify-content: start;
    margin-top: 20px;
    padding-left: 0px;
    margin: 5px;
  }
  @media (max-width: 834px) {
    display: none;
  }
`;

export const SocialLinks = styled.a`
  textdecoration: none;
  color: white;
  font-size: 1em;
  :hover {
    color: ${(props) => props.color};
  }
`;
