import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 45px;
  background: linear-gradient(322deg,#4400b1 0%,#971e6c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;


const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  line-height:'4px';
  font-size: 24px;
  color: lightgray;
`;


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>About Me</Title>
          <Desc>
          Enrolled in my 2nd year at the University of Visvesvaraya College of Engineering (UVCE), Bangalore. 
          <br /> <br />
           I'm passionately charting my path. With a self-forged expertise in Full Stack Web Development, I'm presently immersing myself in the intricacies of Data Structures and Algorithms. I strongly believe in the connection between dedicated aspirations and persistent pursuit <br /> 
        <i style={{marginTop:'6px'}}> - a philosophy I live by</i> 
          </Desc>
        
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
