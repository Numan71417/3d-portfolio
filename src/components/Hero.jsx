import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Stitle = styled.h2``;

const Title = styled.h1`
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 145, 83, 1) 90%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Role = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: "flex";
`;

const Img1 = styled.img`
  &:hover{
    scale:1.5;
    transform: rotateZ(-15deg);
  }
`;
const Img2 = styled.img`
  &:hover{
    scale:1.5;
    transform: rotateZ(15deg);
  }
`;
const Img3 = styled.img`
  &:hover{
    scale:1.5;
    transform: rotateZ(-15deg);
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
      <Left>
          <Stitle>I am</Stitle>
          <Title>MOHAMMED NUMAN RAZA</Title>
          <Role>
            <Line src="./img/line.png" />
            <Subtitle>Full stack Web Developer</Subtitle>
          </Role>
          <Desc>
            I combine technical skills with creative problem-solving to build
            innovative solutions.
          </Desc>
          <SocialLinks>
            <a href="https://github.com/Numan71417" target="_blank">
              {" "}
              <Img1 src="./img/github.png" alt="" width="50px" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-numan-raza-ab980b202"
              target="_blank"
            >
              {" "}
              <Img2 src="./img/linkedin.png" alt="" width="50px" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammednuman71417@gmail.com"
              target="_blank"
            >
              {" "}
              <Img3 src="./img/gmail.png" alt="" width="50px" />
            </a>
          </SocialLinks>
        </Left>
        <Right>
          {/* <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.45}
                  speed={3}
                />
              </Sphere>
            </Suspense>
          </Canvas> */}
           <Img src="./img/submarine.png" style={{ height: "450px" }} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
