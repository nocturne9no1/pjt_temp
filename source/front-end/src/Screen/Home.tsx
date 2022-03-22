import React from "react";
import { Link } from "react-router-dom";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <main>
      <h2>시작화면이 될 곳입니다. 보통 페이지의 제목을 h2로 하더라구요</h2>
      <p>테스트 링크는 아래 있읍니다</p>
      <Link to="/test">테스트 페이지</Link>
    </main>
  );
};

export default Home;
