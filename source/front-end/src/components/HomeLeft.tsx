

const HomeLeft: React.FC = (): JSX.Element => {
  const recommendSmaple = [
    {
      name: "랜선 자르기",
      num: "1654",
      platform: "BOJ",
    },
    {
      name: "연결 요소의 개수",
      num: "11724",
      platform: "BOJ",
    },
    {
      name: "미로 탐색",
      num: "2178",
      platform: "BOJ",
    }
  ]
  return (
    <aside className="homeleft-wrap">
      <ul className="today-recommend">
        {recommendSmaple.map((item, idx) => <RecommendItem item={item} key={idx}/>)}
      </ul>
    </aside>
  )
}

interface RecommendItemProps {
  name: string,
  num: string,
  platform: string
}

const RecommendItem = ({item}: {item: RecommendItemProps}): JSX.Element => {
  const {name, num, platform} = item;
  return (
    <li>
      <a href={`https://www.acmicpc.net/problem/${num}`} target="_blank" rel="noopener noreferrer" className="left-list">
        <div className="top">
          <span className="tag">{platform}</span>
        </div>
        <div className="bottom">
          <span className="name">{name}</span>
        </div>
      </a>
    </li>
  )
}

export default HomeLeft;