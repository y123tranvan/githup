import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import styled from "styled-components";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const Button = styled.button({
    background: "blue",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    color:'white'
  });
  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
