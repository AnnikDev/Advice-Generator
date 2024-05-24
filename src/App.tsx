import { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <AdNum>
          ADVICE <span>#117</span>
        </AdNum>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 54rem;
  height: 32rem;
  border-radius: 1.5rem;
  box-shadow: 3rem 5rem 8rem 0 rgba(0, 0, 0, 0.1);
  background-color: #313a48;
  text-align: center;
  padding: 4.8rem 4.8rem 7.2rem;
`;

const AdNum = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.4rem;
  color: #53ffaa;
`;
