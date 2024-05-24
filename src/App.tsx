import { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <AdNum>
          ADVICE <span className="AdCode">#117</span>
        </AdNum>
        <Advice>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </Advice>
        <img src="/images/pattern-divider-desktop.svg" alt="" />
        <Dice>
          <img src="/images/icon-dice.svg" alt="" />
        </Dice>
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

  .AdCode {
    font-size: 1.3rem;
  }
`;

const Advice = styled.p`
  margin: 2.4rem 0 4rem;
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -0.03rem;
  color: #cee3e9;
`;

const Dice = styled.button`
  width: 6.4rem;
  height: 6.4rem;
  background-color: #53ffaa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(19.2rem, 2.5rem);
  cursor: pointer;

  &&:hover {
    box-shadow: 0 0 4rem 0 #53ffaa;
    background-color: #53ffaa;
  }
`;
