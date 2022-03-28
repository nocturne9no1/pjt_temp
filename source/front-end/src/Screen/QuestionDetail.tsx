import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

interface QuestionContentsProps {
  code: String;
  title: String;
  platform: String;
  type: String;
  content: String;
}

const QuestionDetail: React.FC = (): JSX.Element => {
  // Sample for test
  const QuestionCode = `
  def solution(numbers, target):
  answer = 0

  def dfs(idx, now_value, log):
      nonlocal answer
      if idx == len(numbers) - 1:
          if now_value == target:
              answer += 1
          return
      dfs(idx + 1, now_value + numbers[idx + 1], log + '+')
      dfs(idx + 1, now_value - numbers[idx + 1], log + '-')

  dfs(0, numbers[0], '')
  dfs(0, -numbers[0], '')
  return answer


  print(solution([1, 1, 1, 1, 1], 3))
  `;
  const QuestionContents: QuestionContentsProps = {
    code: QuestionCode,
    title: "모르겠어용 ㅠㅠ",
    platform: "BOJ",
    type: "시간초과",
    content: "시간초과 100만년 나오는데 어케함?",
  };
  return (
    <div className="question_detail_wrap">
      <h2>{QuestionContents.title}</h2>
      <span>{QuestionContents.platform}</span>
      <span>{QuestionContents.type}</span>
      <CodeMirror
        value={QuestionCode}
        lang="python"
        theme="dark"
        extensions={[python()]}
        editable={false}
      />
      <p>{QuestionContents.content}</p>
    </div>
  );
};

export default QuestionDetail;
