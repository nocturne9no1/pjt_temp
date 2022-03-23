# Front End Development History

## 개요

* 어떤 변화를 주었는지 대략적으로 적어봐요
  * 상세해도 상세한 대로 좋을지도...?
* h3 태그 `###`로 날짜를 h4 태그 `####`로 이름을 적고
* 무엇을 했는지 대략 적어봅시다
* `왜`를 적으면 정말 좋다!
* 의식의 흐름도 좋을듯



## History

### 220322

#### 형규

* React Template 생성
  * TS 버전으로
* 스타일링을 위한 라이브러리 설치
  * `_reset.scss` 작성 및 적용
    * `_(underscore)`의 의미: 전역으로 적용될거임
    * 크로스 브라우징을 위한 것임
    * default style 이 각기 다르게 적용돼있기 때문
  * `_normalize.scss` 작성
    * 적용은 하지 않음
    * 우선은 `_reset.scss` 기반으로 작업
    * 크로스 브라우징은 향후 다시 논의해 보는 걸로...
  * 위 둘의 차이점에 대한 설명
    * https://tuhbm.github.io/2018/02/21/cssReset/
* React router dom v6 설치
  * SPA routing 기능 이용하기 위해
  * 공식 문서 링크
    * https://reactrouter.com/docs/en/v6
  * root 파일에 react router 걸어둠
* 간단한 라우팅 테스트 페이지 작성



### 220323

#### 형규

* Button 컴포넌트 생성
  * props 일단
    * border, color, radius, height, width, onClick
    * 만 줌
  * 이후 필요성에 따라 수정 가느
