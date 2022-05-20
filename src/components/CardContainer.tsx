import { Switch } from "antd";
import { SwitchChangeEventHandler } from "antd/lib/switch";
import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/pacman.png";
import CountDown, { TargetTimeType } from "./CountDown";

const CardBackground = styled.div`
  background-image: ${`url(${background})`};
  min-width: 1200px;
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

const StyledSwitch = styled(Switch)`
  margin-bottom: 30px;
  height: 48px;
  width: 200px;
  span {
    font-size: 50px;
  }
  div {
    top: 15px;
  }
`;

const CardContainer: React.FC = () => {
  const [targetType, setTargetType] = useState<TargetTimeType>("TORONTO");

  const handleSwitch: SwitchChangeEventHandler = (checked) => {
    if (checked) {
      setTargetType("WEDDING");
    } else {
      setTargetType("TORONTO");
    }
  };

  return (
    <CardBackground>
      <StyledSwitch
        checkedChildren="Wedding"
        unCheckedChildren="Toronto"
        onChange={handleSwitch}
      />
      <CountDown targetTime={targetType} />
    </CardBackground>
  );
};

export default CardContainer;
