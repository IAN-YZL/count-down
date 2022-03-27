import React from "react";
import styled from "styled-components";

const UnitText = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  margin: 0;
`;

interface WrapperProps {
  isSignal?: boolean;
}

const TimeBlockWrapper = styled.div<WrapperProps>`
  text-align: center;
  color: #fff;
  padding: ${(props) => (props.isSignal ? 0 : "0 12px")};
`;

const NumberText = styled.p`
  font-size: 36px;
  margin: 0;
  margin: 0 0 10px 0;
`;

interface Props {
  time: number | string;
  unit: string;
  isSignal?: boolean;
}

const TimeBlock: React.FC<Props> = ({ time, unit, isSignal }) => {
  return (
    <TimeBlockWrapper isSignal={isSignal}>
      <NumberText>{time}</NumberText>
      <UnitText>{unit}</UnitText>
    </TimeBlockWrapper>
  );
};

export default TimeBlock;
