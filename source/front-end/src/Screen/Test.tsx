import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const Test: React.FC = (): JSX.Element => {
  const [codeValue, setCodeValue] = useState("");
  const [id, setid] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const onTextChange = (
    e: React.FormEvent<HTMLInputElement>,
    setFunc: Function
  ) => {
    setFunc(e.currentTarget.value)
  }
  const validCheck = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value)
    onTextChange(e, setPwCheck)
  }
  const handleSignupButton = () => {
    console.log(id, pw, pwCheck)
  }
  return (
    <div>
      <h2>Test</h2>

      <label htmlFor="profileImg">프로필 사진 첨부</label>
      <input type="file" id="profileImg" accept="image/*" />

      <label htmlFor="id">아이디:</label>
      <input type="text" id="id" onChange={(e) => onTextChange(e, setid)}/>

      <label htmlFor="pw">비밀번호:</label>
      <input type="text" id="pw" onChange={(e) => onTextChange(e, setPw)}/>

      <label htmlFor="pwCheck">비밀번호확인:</label>
      <input type="text" id="pwCheck" onChange={(e) => validCheck(e)}/>

      <button onClick={() => handleSignupButton()}>회원가입</button>

      {/* <CodeMirror
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
      </div> */}
    </div>
  );
};

export default Test;
