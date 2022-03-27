import React, { useEffect, useState } from "react";
import TimeBlock from "./TimeBlock";
import styled from "styled-components";

const CountDownWrapper = styled.div`
  background-color: rgb(128, 6, 0, 0.6);
  display: flex;
  filter: brightness(1.5);
  padding: 36px;
  border-radius: 3px;
  box-shadow: 0 0 15px rgb(185, 55, 48);
`;

const SECOND_DOMINATOR = 1000;
const MINUTE_DOMINATOR = SECOND_DOMINATOR * 60;
const HOUR_DOMINATOR = MINUTE_DOMINATOR * 60;
const DAY_DOMINATOR = HOUR_DOMINATOR * 24;

const TARGET_TIME = "2022-08-27 18:30:00 GMT-500";

const getTime = (): TimeProps => {
  let leftTime = new Date(TARGET_TIME).getTime() - new Date().getTime();
  const leftDay = Math.ceil(leftTime / DAY_DOMINATOR);
  leftTime = leftTime % DAY_DOMINATOR;
  const leftHour = Math.ceil(leftTime / HOUR_DOMINATOR);
  leftTime = leftTime % HOUR_DOMINATOR;
  const leftMinute = Math.ceil(leftTime / MINUTE_DOMINATOR);
  leftTime = leftTime % MINUTE_DOMINATOR;
  const leftSecond = Math.ceil(leftTime / SECOND_DOMINATOR);
  return {
    leftDay,
    leftHour,
    leftMinute,
    leftSecond,
  };
};

interface TimeProps {
  leftDay: number;
  leftHour: number;
  leftMinute: number;
  leftSecond: number;
}

const CountDown: React.FC = () => {
  const [leftTime, setLeftTime] = useState<TimeProps>(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CountDownWrapper>
      <TimeBlock time={leftTime.leftDay} unit="day" />
      <TimeBlock time={":"} unit="" isSignal={true} />
      <TimeBlock time={leftTime.leftHour} unit="hour" />
      <TimeBlock time={":"} unit="" isSignal={true} />
      <TimeBlock time={leftTime.leftMinute} unit="min" />
      <TimeBlock time={":"} unit="" isSignal={true} />
      <TimeBlock time={leftTime.leftSecond} unit="sec" />
    </CountDownWrapper>
  );
};

export default CountDown;
