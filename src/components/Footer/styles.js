import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 300px;
  background-color: rgb(41 52 61);
  color: white;
  line-height: 1.8;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h1`
  font-family: "DM Serif Display", serif;
`;

export const Description = styled.p`
  font-family: "Roboto Mono", monospace;
  margin: 0 0 20px 0;
  padding: 0px;
  text-align: center;
  color: white;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: ${(props) => props.colour};
  color: ${(props) => props.fontcolor};
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2em;
  letter-spacing: 20px;
  margin: 20px;
  padding-left: 20px;
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const SocialLinks = styled.a`
  textdecoration: none;
  color: white;
  font-size: 1.5em;
  :hover {
    color: ${(props) => props.color};
  }
  @media (max-width: 490px) {
    display: ${(props) => (props.mobile ? "none" : "null")};
  }
`;
