import React, { useEffect, useState } from "react";
import TimeBlock from "./TimeBlock";
import styled from "styled-components";
import { Progress } from "antd";

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

const TARGET_TIME = "2022-08-27T18:30:00.000-05:00";
const START_TIME = "2022-03-03T10:00:00.000-0500";

const getTime = (): TimeProps => {
  let leftTime = new Date(TARGET_TIME).getTime() - new Date().getTime();
  const leftDay = Math.floor(leftTime / DAY_DOMINATOR);
  leftTime = leftTime % DAY_DOMINATOR;
  const leftHour = Math.floor(leftTime / HOUR_DOMINATOR);
  leftTime = leftTime % HOUR_DOMINATOR;
  const leftMinute = Math.floor(leftTime / MINUTE_DOMINATOR);
  leftTime = leftTime % MINUTE_DOMINATOR;
  const leftSecond = Math.floor(leftTime / SECOND_DOMINATOR);
  const percent = Math.ceil(
    ((new Date().getTime() - new Date(START_TIME).getTime()) /
      (new Date(TARGET_TIME).getTime() - new Date(START_TIME).getTime())) *
      100
  );
  return {
    leftDay,
    leftHour,
    leftMinute,
    leftSecond,
    percent,
  };
};

interface TimeProps {
  leftDay: number;
  leftHour: number;
  leftMinute: number;
  leftSecond: number;
  percent: number;
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
    <>
      <CountDownWrapper>
        <TimeBlock time={leftTime.leftDay} unit="day" />
        <TimeBlock time={":"} unit="" isSignal={true} />
        <TimeBlock time={leftTime.leftHour} unit="hour" />
        <TimeBlock time={":"} unit="" isSignal={true} />
        <TimeBlock time={leftTime.leftMinute} unit="min" />
        <TimeBlock time={":"} unit="" isSignal={true} />
        <TimeBlock time={leftTime.leftSecond} unit="sec" />
      </CountDownWrapper>
      <Progress
        className="red-text"
        percent={leftTime.percent}
        style={{
          maxWidth: "600px",
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        strokeColor="#ffff3d"
        steps={100}
        size="small"
      />
    </>
  );
};

export default CountDown;
