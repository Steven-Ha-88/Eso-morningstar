import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fff0;
  height: auto;
  min-height: 120vh;
  padding: 50px;
  @media (max-width: 780px) {
    padding: 0px;
    min-height: 165vh;
  }
`;

export const Header = styled.h1`
  text-align: center;
  font-family: "Open sans", serif;
  color: black;
  font-size: 22px;
  margin: 50px 0 20px;
  @media (max-width: 375px) {
    margin-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  justify-content: center;
  margin-bottom: 30px;
  background-color: #ffffff;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 8px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #28b684c4;
`;
export const Card = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 8px;
  margin: 30px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 500px;
    height: 200px;
  }
  :hover ${Overlay} {
    opacity: 1;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "DM Serif Display", serif;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
