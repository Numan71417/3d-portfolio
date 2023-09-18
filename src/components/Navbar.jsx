import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Namelogo = styled.h1`
  font-weight: 750;
  background-color: #0625a5;
  background-image: linear-gradient(19deg, #0625a5 0%, #4f066f 84%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover{
    text-decoration:underline
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #0625a5;
  background-image: linear-gradient(19deg, #0625a5 0%, #4f066f 84%);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
    scale:1.1;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Namelogo>
            {'<'}NUMAN{'>'}
          </Namelogo>

          <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammednuman71417@gmail.com" target="_blank">
           <Button>Hire Me</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
