import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: 2px;
  color: white;
  background: linear-gradient(180deg, #1CB5E0 0%, #000851 100%);
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
