import React, { useState, useRef, useEffect, FormEvent } from "react";
import "../scss/QuestionForm.scss";
// 향후 모듈화를 통해 하나로 관리 - 지원 언어 많아지면 코드 비대
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

const HomeQuestionForm: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [codeValue, setCodeValue] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [lang, setLang] = useState<Array<string>>([]);
  const [textHeight, setTextHeight] = useState<number>(35)

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
  const onContentChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setContent(e.currentTarget.value);
    console.log(text)
    // 현재 줄 삭제 시 크기 줄지 않는 이슈
    const height = text.current.scrollHeight;
    setTextHeight(height);
  }

  const text:any = useRef();

  // 이후 axios 로 서버랑 통신
  const _handleSubmitButton = () => {
    console.log(title);
    console.log(platform);
    console.log(type);
    console.log(codeValue);
    console.log(content);
  };

  return (
    <div className="question-form-wrap">
      <input
        type="text"
        className="question-input title"
        title="title"
        placeholder="제목"
        onChange={(e) => onTextChange(e, setTitle)}
      />
      <div className="platform">
        <span>Platform</span>
        <input type="radio" name="platform" id="boj"/>
        <label htmlFor="boj" className="boj tag">BOJ</label>
        <input type="radio" name="platform" id="Programmers" />
        <label htmlFor="Programmers" className="tag programmers">Programmers</label>
        <input type="radio" name="platform" id="SWEA" />
        <label htmlFor="SWEA" className="tag swea">SWEA</label>
        <input type="radio" name="platform" id="etc" />
        <label htmlFor="etc" className="tag etc">Etc.</label>
        {/* <select
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
        </select> */}
      </div>
      <div className="type">
        <span>Type</span>
        <input type="radio" name="type" id="time"/>
        <label htmlFor="time" className="tag time">시간초과</label>
        <input type="radio" name="type" id="logic"/>
        <label htmlFor="logic" className="tag logic">로직</label>
        <input type="radio" name="type" id="error"/>
        <label htmlFor="error" className="tag error">버그/에러</label>
        <input type="radio" name="type" id="etc-type"/>
        <label htmlFor="etc-type" className="tag etc">Etc.</label>
      </div>
      {/* <select
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
      </select> */}
      <select
        name="lang"
        id="language-select"
        defaultValue={""}
        onChange={(e) => onLangChange(e)}
      >
        <option value="" disabled>
          Lang
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
        className="text"
        onChange={(e) => onContentChange(e)}
        style={{height: textHeight}}
        placeholder="내용을 적으세용"
        ref={text}
      />
      <button onClick={() => _handleSubmitButton()}>제출</button>
    </div>
  );
};

export default HomeQuestionForm;
