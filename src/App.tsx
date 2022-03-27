import React from "react";
import styled from "styled-components";
import CardContainer from "./components/CardContainer";

const AppContainer = styled.div`
  background-color: rgb(96, 103, 119);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
function App() {
  return (
    <AppContainer>
      <CardContainer />
    </AppContainer>
  );
}

export default App;
