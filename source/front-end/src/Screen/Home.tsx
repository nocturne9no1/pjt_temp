import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";

const Home: React.FunctionComponent = (): JSX.Element => {
  const QuestionListSamples = [
    {
      problem: {
        name: "랜선 자르기",
        num: "1654",
        platform: "BOJ",
      },
      title: "모르겠어용",
      type: "시간초과",
      like: 15,
      reply: 4,
      detail: {
        text: '분명히 맞는데 왜 시간초과나 아 ㅋㅋㅋㅋ',
        code: `
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
        `
      }
    },
    {
      problem: {
        name: "연결 요소의 개수",
        num: "11724",
        platform: "BOJ",
      },
      title: "에러가 나는데 왜 나는지 모르겠어요",
      type: "버그/에러",
      like: 4,
      reply: 16,
      detail: {
        text: '분명히 맞는데 왜 시간초과나 아 ㅋㅋㅋㅋ',
        code: `
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
        `
      }
    },
    {
      problem: {
        name: "미로 탐색",
        num: "2178",
        platform: "BOJ",
      },
      title: "못해먹겠다 ㅋㅋㅋㅋㅋㅋ",
      type: "Etc.",
      like: 95,
      reply: 162,
      detail: {
        text: '분명히 맞는데 왜 시간초과나 아 ㅋㅋㅋㅋ',
        code: `
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
        `
      }
    },
  ];
  return (
    <main id="container" className="container">
      <h2>시작화면이 될 곳입니다. 보통 페이지의 제목을 h2로 하더라구요</h2>
      <p>테스트 링크는 아래 있읍니다</p>
      <Link to="/test">테스트 페이지</Link>
      <Link to="/question">질문 쓰기</Link>
      <ul className="question_card_list">
        {QuestionListSamples.map((sample, idx) => {
          return <QuestionCard sample={sample} key={idx}/>;
        })}
      </ul>
    </main>
  );
};

interface QuestionCardProps {
  problem: {
    name: string,
    num: string,
    platform: string
  }
  title: string,
  type: string,
  like: number,
  reply: number,
  detail: {
    text: string,
    code: string
  }
}

const QuestionCard = ({
  sample,
}: {
  sample: QuestionCardProps;
}): JSX.Element => {
  const { problem, title, type, like, reply, detail } = sample;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const code = useRef<any>();
  const text = useRef<any>();


  const _handleBtn: Function = (): void => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      setHeight(code.current.clientHeight + text.current.clientHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen])
  return (
    <li className="question_card_wrap">
      <div className="card-header">
        <p className="problem-info">
          <span className="tag platform">{problem.platform}</span>
          <span className="title">{problem.name}</span>
          <a href={`https://www.acmicpc.net/problem/${problem.num}`} target="_blank" rel="noopener noreferrer" className="problem-link">문제보기</a>
        </p>
        <div className="title-wrap">
          <span className="problem-species tag">{type}</span>
          <strong className="question_card_title">{title}</strong>
        </div>
        <button onClick={() => _handleBtn()}>더보기</button>
      </div>
      <div className={`detail-area ${isOpen ? "open" : ""}`} style={{height: height}}>
        <div className="code" ref={code}>
          <pre>
            {detail.code}
          </pre>
        </div>
        <p className="text" ref={text}>
          {detail.text}
        </p>
      </div>
      <div className="card_bottom">
        <span className="like">{like}</span>
        <span className="reply">{reply}</span>
      </div>
    </li>
  );
};

export default Home;
