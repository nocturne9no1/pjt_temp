import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const Test: React.FC = (): JSX.Element => {
  const [codeValue, setCodeValue] = useState("");

  return (
    <div>
      <h2>Test</h2>
      <CodeMirror
        value=""
        height="200px"
        lang="python"
        extensions={[python()]}
        theme="dark"
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
          setCodeValue(value);
        }}
      />
      <br />
      <div>
        <CodeMirror
          value={codeValue}
          editable={false}
          theme="dark"
          extensions={[python()]}
        />
      </div>
    </div>
  );
};

export default Test;
