import React from "react";
import styled from "styled-components";
import background from "../assets/Toronto.jpg";
import CountDown from "./CountDown";

const CardBackground = styled.div`
  background-image: ${`url(${background})`};
  min-width: 900px;
  min-height: 600px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const CardContainer: React.FC = () => {
  return (
    <CardBackground>
      <CountDown />
    </CardBackground>
  );
};

export default CardContainer;
