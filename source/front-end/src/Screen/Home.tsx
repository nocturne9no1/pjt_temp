import HomeQuestionForm from "../components/HomeQuestionForm";
import HomeLeft from "../components/HomeLeft";
import QuestionCard from "../components/QuestionCard";
import HomeRight from "../components/HomeRight";
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
      {/* <h2>시작화면이 될 곳입니다. 보통 페이지의 제목을 h2로 하더라구요</h2> */}
      <HomeLeft></HomeLeft>
      <div className="home-middle-wrap">
        <HomeQuestionForm></HomeQuestionForm>
        <ul className="question_card_list">
          {QuestionListSamples.map((sample, idx) => {
            return <QuestionCard sample={sample} key={idx}/>;
          })}
        </ul>
      </div>
      <HomeRight></HomeRight>
    </main>
  );
};

export default Home;
