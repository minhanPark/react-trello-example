import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { hourSelector, minuteState } from "./atom";
import { Theme } from "./Theme";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(Number(event.currentTarget.value));
  };
  const onHourChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(Number(event.currentTarget.value));
  };
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <input
          value={minutes}
          onChange={onMinutesChange}
          type="number"
          placeholder="Minutes"
        />
        <input
          value={hours}
          onChange={onHourChange}
          type="number"
          placeholder="Hours"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
