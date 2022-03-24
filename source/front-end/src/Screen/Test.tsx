import React from "react";
import { Button } from "../components";

const Test: React.FC = (): JSX.Element => {
  return (
    <div>
      <h2>Test</h2>
      <Button
        border="none"
        color="#f2f2f2"
        radius="50%"
        height="50px"
        width="200px"
        onClick={() => console.log("test")}
      >
        버튼
      </Button>
      <button>dd</button>
    </div>
  );
};

export default Test;
