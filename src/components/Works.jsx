import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "HTML CSS JavaScipt",
  "React",
  "Nodejs",
  "Mongodb",
  "C C++ Programming",
  "Java",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Center = styled.h1`
background: linear-gradient(322deg,#4400b1 0%,#971e6c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: -webkit-xxx-large;
    text-align:'center';
    font-weight:600;
`;

const Container = styled.div`
  width: 1100px;
  
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 45px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
          <Center>Skills</Center>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          
        </Right>

        {/* <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right> */}
      </Container>
    </Section>
  );
};

export default Works;
