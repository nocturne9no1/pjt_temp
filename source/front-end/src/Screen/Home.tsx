import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <main>
      <h2>시작화면이 될 곳입니다. 보통 페이지의 제목을 h2로 하더라구요</h2>
      <p>테스트 링크는 아래 있읍니다</p>
      <Link to="/test">테스트 페이지</Link>
      <br></br>
      <br></br>
      <CodeMirror
        value="console.log('hello world!');"
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log("value:", value);
        }}
      />
    </main>
  );
};

export default Home;
