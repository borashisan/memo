import { type FC, memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px",
};

type Reset = () => void;
type Child1Props = {
  onClickReset: Reset;
};

export const Child1: FC<Child1Props> = memo((props) => {
  console.log("Child1 レンダリング");

  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>Child1</p>
      <button onClick={onClickReset}>リセット</button>
      <Child2 />
      <Child3 />
    </div>
  );
});
