import React, { useState } from "react";
import "../scss/QuestionForm.scss";
// 향후 모듈화를 통해 하나로 관리 - 지원 언어 많아지면 코드 비대
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

const QuestionForm: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [codeValue, setCodeValue] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [lang, setLang] = useState<Array<string>>([]);
  // [javascript()];
  const onTextChange = (
    e: React.FormEvent<HTMLInputElement>,
    setFunc: Function
  ) => {
    setFunc(e.currentTarget.value);
  };
  const onSelectChange = (
    e: React.FormEvent<HTMLSelectElement>,
    setFunc: Function
  ) => {
    setFunc(e.currentTarget.value);
  };
  const onLangChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setLang([...lang, `${e.currentTarget.value}()`]);
  };
  // 이후 axios 로 서버랑 통신
  const _handleSubmitButton = () => {
    console.log(title);
    console.log(platform);
    console.log(type);
    console.log(codeValue);
    console.log(content);
  };

  return (
    <div className="question_form_wrap">
      <input
        type="text"
        className="question_input"
        title="title"
        onChange={(e) => onTextChange(e, setTitle)}
      />
      <label htmlFor="platform-select">Platform</label>
      <select
        name="platform"
        id="platform-select"
        required
        defaultValue=""
        onChange={(e) => onSelectChange(e, setPlatform)}
      >
        <option value="" disabled>
          Platform
        </option>
        <option value="BOJ">BOJ</option>
        <option value="Programmers">Programmers</option>
        <option value="SWEA">SWEA</option>
        <option value="Etc.">Etc.</option>
      </select>
      <label htmlFor="question-type-select">Type</label>
      <select
        name="question type"
        id="question-type-select"
        defaultValue={""}
        onChange={(e) => onSelectChange(e, setType)}
      >
        <option value="" disabled>
          질문 유형
        </option>
        <option value="시간초과">시간초과</option>
        <option value="로직">로직</option>
        <option value="버그/에러">버그/에러</option>
        <option value="Etc.">Etc.</option>
      </select>
      <select
        name="lang"
        id="language-select"
        defaultValue={""}
        onChange={(e) => onLangChange(e)}
      >
        <option value="" disabled>
          언어 선택
        </option>
        <option value="python">python</option>
        <option value="javascript">javascript</option>
      </select>
      <div className="code_input_wrap">
        <CodeMirror
          minHeight="300px"
          extensions={[python()]}
          theme="dark"
          onChange={(value) => {
            setCodeValue(value);
          }}
        />
      </div>
      <textarea
        name="question content"
        id="quetions-content"
        cols={30}
        rows={10}
        onChange={(e) => setContent(e.currentTarget.value)}
      />
      <button onClick={() => _handleSubmitButton()}>제출</button>
    </div>
  );
};

export default QuestionForm;
