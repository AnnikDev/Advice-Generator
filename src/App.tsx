import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

type TAdvice = {
  slip: {
    id: number;
    advice: string;
  };
};

function App() {
  const [advice, setAdvice] = useState<TAdvice>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respo = await fetch("https://api.adviceslip.com/advice");
        const data = await respo.json();

        if (!data) throw new Error("something went wrong");

        setAdvice(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [count]);

  return (
    <>
      <Container>
        <AdNum>ADVICE #{advice?.slip.id}</AdNum>
        <Advice>"{advice?.slip.advice}"</Advice>
        <img
          className="divider"
          src="/images/pattern-divider-desktop.svg"
          alt=""
        />
        <Dice onClick={() => setCount((prev) => prev + 1)}>
          <img src="/images/icon-dice.svg" alt="" />
        </Dice>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 54rem;
  border-radius: 1.5rem;
  box-shadow: 3rem 5rem 8rem 0 rgba(0, 0, 0, 0.1);
  background-color: #313a48;
  text-align: center;
  padding: 4.8rem 4.8rem 7.2rem;
  position: relative;
`;

const AdNum = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.4rem;
  color: #53ffaa;

  .divider {
    margin-bottom: 4.7rem;
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
  padding: 2rem;
  background-color: #53ffaa;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  cursor: pointer;

  &&:hover {
    box-shadow: 0 0 4rem 0 #53ffaa;
    background-color: #53ffaa;
  }
`;
