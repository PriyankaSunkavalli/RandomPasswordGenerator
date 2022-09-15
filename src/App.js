import logo from "./logo.svg";
import "./App.css";
import CopyPasswordComponent from "./components/CopyPasswordComponent";
import styled from "styled-components";
import CardComponent from "./components/CardComponent";
import { useState } from "react";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  const [result, setResult] = useState("");

  return (
    <Root>
      <CopyPasswordComponent result={result} setResult={setResult} />
      <CardComponent result={result} setResult={setResult} />
    </Root>
  );
}

export default App;
