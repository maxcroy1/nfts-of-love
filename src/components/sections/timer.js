import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { Minter } from "./minter";

const TimerContainer = styled.div`
  font-family: "Tauri", sans-serif;
  font-size: 0.8rem;
  border-top: solid white 1px;
  border-bottom: solid white 1px;
  padding: 10px;

  @media only screen and (min-width: 600px) {
    /* For tablets: */
    font-size: 2rem;
  }

  @media only screen and (min-width: 770px) {
    /* For desktop: */
    font-size: 2.8rem;
  }
`;

const calculateTimeLeft = () => {
  let difference = +new Date(`Fri Oct 29 2021 21:00:00 GMT-0400`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <TimerContainer>
      {timerComponents.length ? timerComponents : <Minter />}
      <br/>
      Until Mint
    </TimerContainer>
  );
};

export default Timer;
