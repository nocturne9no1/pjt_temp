import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss";

const Home: React.FunctionComponent = (): JSX.Element => {
  const QuestionListSamples = [
    {
      title: "모르겠어용",
      type: "시간초과",
      platform: "BOJ",
      like: 15,
      reply: 4,
    },
    {
      title: "에러가 나는데 왜 나는지 모르겠어요",
      type: "버그/에러",
      platform: "BOJ",
      like: 4,
      reply: 16,
    },
    {
      title: "못해먹겠다 ㅋㅋㅋㅋㅋㅋ",
      type: "Etc.",
      platform: "BOJ",
      like: 95,
      reply: 162,
    },
  ];
  return (
    <main id="container" className="container">
      <h2>시작화면이 될 곳입니다. 보통 페이지의 제목을 h2로 하더라구요</h2>
      <p>테스트 링크는 아래 있읍니다</p>
      <Link to="/test">테스트 페이지</Link>
      <Link to="/question">질문 쓰기</Link>
      <ul className="question_card_list">
        {QuestionListSamples.map((sample) => {
          return <QuestionCard sample={sample} />;
        })}
      </ul>
    </main>
  );
};

interface QuestionCardProps {
  title: string;
  type: string;
  platform: string;
  like: number;
  reply: number;
}

const QuestionCard = ({
  sample,
}: {
  sample: QuestionCardProps;
}): JSX.Element => {
  const { title, type, platform, like, reply } = sample;
  return (
    <li className="question_card_wrap">
      <div>
        <Link to="/question-detail">
          <h3 className="question_card_title">{title}</h3>
        </Link>
        <div className="tag_wrap">
          {type} {platform}
        </div>
        <div className="card_bottom">
          <span className="like">{like}</span>
          <span className="reply">{reply}</span>
        </div>
      </div>
    </li>
  );
};

export default Home;
