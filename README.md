# Wanted Pre-Onboarding FE #4-2. (잉그올 기업과제)

<br/>

## 목차

1. 프로젝트 개요
   1. 역할

2. 프로젝트 설계
   1. 프로젝트 목표
   2. 시연 시나리오

3. 프로젝트 진행 결과
   1. 구현/미구현
   2. 미구현의 우선순위
      - 1순위 - 직접적인 영향
      - 2순위 - 간접적인 영향
      - 3순위 - 기획 구체화


4. 개발 하이라이트 
   - 상황1 : 더 자연스러운 시각 표현 고민
   - 상황2 : 오늘 수업이 내일 끝나는 경우 고민
   - 상황3 : 수업 시간 중첩 검사의 시점 고민
   - 상황4 : confirm vs custom dialog 고민

5. 성장했던 부분 회고
6. 프로젝트 요약
   1. 프로젝트 흐름도
   2. 작업단위 최소화

7. 프로젝트 구조

8. 기능 구현
   1. 주간 테이블 
   2. 수업 일정 추가 페이지
9. 프로젝트 설치 및 실행

10. 회의록
11. 프로젝트 결과물

<br/>

## 1. 프로젝트 소개

> 개요 : 원티드 프리온보딩 5기 4주차 다섯 번 째 팀 과제
>
> 주제 : 잉그올 기업과제 - 수업 일정 페이지
>
> 기간 : 2022.07.28 ~ 2022.07.30

<br/>

### 1.1. 역할

|                   이름                    | 직책 | 역할                                                                                                    |
| :---------------------------------------: | :--: | :------------------------------------------------------------------------------------------------------ |
| [엄일경](https://github.com/sunaerocket)  | 팀장 | 📌데이터 기본값 JSON 파일 작성 <br/>📌수업 보기 페이지 - 수업 삭제 기능, 수업 조회 기능                 |
|  [추연빈](https://github.com/chuyeonbin)  | 팀원 | 📌통신 모듈 작성<br />                                          |
| [임은지](https://github.com/salangdung-i) | 팀원 | 📌레이아웃 - 수업 보기 페이지, 수업 추가 페이지 <br /> 📌라우터<br/>📌공통 컴포넌트 - 카드 , 버튼<br /> |
|  [오태권](https://github.com/ohtaekwon)   | 팀원 | 📌수업 추가 페이지 - 저장 기능<br/>📌데이터 타입 설정하기                                               |
|    [이진희](https://github.com/bebusl)    | 팀원 | 📌json-server 세팅<br />📌수업 추가 페이지 - 반복 설정 기능 <br />📌서버 요청 시 강제 새로고침 버그 수정                                      |
| [문성운](https://github.com/corgi-world)  | 팀원 | 📌수업 추가 페이지 - 새로고침 해도 데이터 유지하기 <br />📌수업 추가 페이지 - 시작 시간 설정 기능<br/>📌일정 중첩 방지 기능       |

<br/>

## 2.  프로젝트 설계

### 2.1. 프로젝트 목표

- 대표적인 사용 시나리오를 시연한다
- 구현/미구현 기능을 설명한다
- 미구현 사항 중 우선 순위와 그 이유를 설명한다
- 가정 상황과 처리/미처리된 엣지케이스를 설명한다

### 2.2. 시연 시나리오

사용자: 잉그올의 엄선생님 🧑‍🏫

- 엄선생님은 메인 페이지에서 수업을 확인 한다 ⇒ 월수금 아침 수업만 있다
- 엄선생님은 새로운 수업을 추가한다 ⇒ 화목 반복되는 오후 수업을 추가할 수 있다.
- 엄선생님은 주 4일 근무 조건을 만든다 ⇒ 수요일 수업 제거할 수 있다.

<br/>

## 3. 프로젝트 진행 결과

### 3.1.  구현/미구현

>  🎤 필수 요구 사항은 전부 구현, 일부 추가 요구 사항 반영

- 필수 요구사항에 중점을 두고 프로젝트 진행
- 미리 준비해둔 체크리스트를 지워가면서 작업

### 3.2. 미구현 사항의 우선순위

>  🎤 사용자 편의와 사업 가치 증진을 기준으로 평가

#### 1순위, 직접적인 영향

- 사용자 인증 도입 ⇒ 많은 사용자는 사업가치를 많이 증진한다
- 연강 추가 기능 ⇒ 강의시간을 자유자재로 설정하지 못하는 것은 사업 가치를 크게 저해한다
- 일정 없는 요일 숨김 처리 ⇒ 관심사만 집중하도록 하는 넛지는 사용자에게 유익하다

#### 2순위, 간접적인 영향

- 토스트 오류 처리 ⇒ 사용자에게 오류를 알려 CS 업무를 돕는다
- 테스트 코드 작성 ⇒ 개발자의 코드 품질 개선을 돕는다

#### 3순위, 기획 구체화 필요

- 반응형 UI ⇒ mobile first? desktop first? 좋은 설계를 하기 위한 정보가 부족하다
- 타임존 지원 ⇒ 이 앱은 global-wide? continent-wide? nation-wide? 무엇을 위한 타임존 설정인지 모호하다

<br/>

## 4. 개발 하이라이트

### 4.1. 상황1: 더 자연스러운 시각 표현 고민

> 🎤 시간 입력 옵션 `[12, 01, 02, 03…11]` 로 표현

- 오전 00시/오후 00시 vs 오전 12시/오후 12시

- 레퍼런스: 아이폰 알람, date-fns

  - 아이폰: 00시가 없고 모두 12시로 처리
  - date-fns: format 기능으로 12시간제(hh) 파싱하면 12시로 처리

  ```jsx
  import { format } from 'date-fns';
  const now = new Date();
  now.setMinutes(0);
  now.setHours(0);
  console.log(format(now, 'hh:mm')); // 12:00
  now.setHours(12);
  console.log(format(now, 'hh:mm')); // 12:00
  ```

### 4.2. 상황2: 오늘 수업이 내일 끝나는 경우 고민

> 🎤 마감 시간 `11시 15분`을 지나면 비활성화 처리

- 월요일 오후 11시 20분에 수업을 시작하면 화요일을 맞이하면서 수업이 종료된다
- 단순하게 수업을 슬롯 하나로 표현하기 때문에 월요일과 화요일에 나눠서 표시하면 복잡도가 늘어난다
- 하루 수업의 마감시간을 정하여 11시 15분 이후의 시각은 비활성화 처리, 예외 케이스를 방지했다

### 4.3. 상황3: 수업 시간 중첩 검사의 시점 고민

> 🎤 서버에 `저장 요청 직전`에 검사

- 1안: 사용자가 입력하는 시점에 검사하는 방안
- 2안: 저장 버튼을 눌러 데이터가 확정된 상태에서 검사하는 방안
- 2안이 서버 요청 수 최적화 관점에서 더 좋은 선택이라고 생각했다

### 4.4. 상황4: confirm vs custom dialog 고민

> 🎤 `커스텀 다이얼로그` 선택

- confirm, alert 기능은 브라우저에서 제어하는 영역이다
  - 따라서 브라우저마다 조금씩 동작과 UI가 달라 사용 경험이 달라진다
  - [DOM 내부에 없기 때문에 표시할 위치를 제어하는 것도 불가능하다](https://stackoverflow.com/questions/69053432/how-can-i-center-the-confirm-window-alert-in-the-center-of-the-page-using-reac)
- 따라서 일관적인 사용 경험과 커스터마이징을 위해서 커스텀 다이얼로그를 구현했다

<br/>

## 5. 성장했던 부분 회고

1.  💬 : 점점 개선되는 깃 커밋 트리

2.  💬 : 높은 공식 문서 검토 빈도

3.  💬 : 단축되는 트러블슈팅 시간(…이라고 믿고 싶어요)

<br/>

## 6. 프로젝트 요약

 ![https://img.shields.io/badge/Laguage-Typescript-red](https://img.shields.io/badge/Laguage-Typescript-green?logo=Typescript&logoColor=#377549) ![React_query](https://img.shields.io/badge/Libarary-React_Query-green?logo=reactquery&logoColor=#377549) ![https://img.shields.io/badge/Laguage-Typescript-red](https://img.shields.io/badge/UILibarary-MUI-green?logo=MUI&logoColor=#377549)

📌본 과제는 튜터가 사용하는 수업 일정 관리(CRUD) 서비스다

<br/>

### 6.1. 프로젝트 흐름도



![요약](https://raw.githubusercontent.com/ohtaekwon/ohtaekwon/master/img/week4_2/SUMMARY2.png)





### 1) UI 구현

- 전반적인 플랫폼의 UI는 실용적이고 빠르게 구현할 수 있도록, `Meterail-UI` 라이브러리 사용 기획

### 2) 서버의 상태관리

- 리액트 쿼리를 사용하여 서버의 상태관리를 하도록 한다.
  - 존재하는 수업 시간표  데이터 상태 관리를 한다.
  - 수업 추가 / 수업 삭제 시 업데이트된 데이터를 요청한다.

### 3) 서버의 데이터 정의

```json
{
  "schedules": [
    {
      "id": 1,
      "weekday": "monday",
      "start": "09:00:00",
      "end": "09:40:00"
    },
    {
      "id": 2,
      "weekday": "wednesday",
      "start": "09:00:00",
      "end": "09:40:00"
    }
  ]
}
```

### 6.2. 작업 단위 최소화

- 작업의 최소 단위까지 세분화하여 공동 작업 수행할 수 있도록 진행

![](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_2/backlog%202.png?raw=true)<br/>

## 7. 프로젝트 구조

```bash
📦 src
 ┣── 📂components
 ┃ ┣── 📂timetable
 ┃ ┃ ┣── DeleteDialog.tsx
 ┃ ┃ ┗── index.tsx
 ┃ ┣── Header.tsx
 ┃ ┣── cButton.tsx
 ┃ ┗── cCard.tsx
 ┣── 📂http
 ┃ ┗── index.ts
 ┣── 📂layouts
 ┃ ┗── DefaultLayout.tsx
 ┣── 📂pages
 ┃ ┣── 📂add
 ┃ ┃ ┣── RepeatButton.tsx
 ┃ ┃ ┣── StartTimeSelector.tsx
 ┃ ┃ ┗── index.tsx
 ┃ ┗── main.tsx
 ┣── 📂queries
 ┃ ┗── schedule.ts
 ┣── 📂routes
 ┃ ┗── DefaultRouter.tsx
 ┣── 📂styles
 ┃ ┗── globalStyles.ts
 ┣── 📂types
 ┃ ┗── index.ts
 ┣── 📂utils
 ┃ ┣── 📂constants
 ┃ ┃ ┣── days.ts
 ┃ ┃ ┗── time.ts
 ┃ ┣── dateTimeHelper.ts
 ┃ ┗── storage.ts
 ┣── App.tsx
 ┣── index.tsx
 ┗── react-app-env.d.ts
```

<br/>

## 8. 기능 구현

### 8.1. 주간 테이블

- [x] 주간 일정 데이터를 가져와 요일 시간 별로 노출합니다.
- [x] 날짜는 표시되지 않습니다.
- [x] 각 일정은 x버튼을 누르면 삭제 되어야 합니다.
- [x] add class schedule 버튼을 누르면 수업 일정추가 페이지로 이동합니다.

### 8.2. 수업 일정 추가

- [x] 수업 일정 추가 버튼을 누르면 수업 일정 추가가 열립니다.
- [x] 수업 일정 추가 페이지에서 시작시간을 선택할 수 있습니다.
- [x] 시작시간은 5분 간격으로 제한됩니다.
- [x] 시작 시간의 범위는 0~23시까지 입니다.
- [x] 수업 시간은 항상 40분입니다.
- [x] 수업 일정을 추가할 때 똑같은 시간에 여러 요일을 선택할 수 있습니다.
- [x] 저장 버튼을 누르면 수업 일정 보기로 돌아갑니다.(주간 테이블)
- [x] 새로 추가된 일정이 주간 테이블에 노출됩니다.
- [x] 페이지가 다시 로드 되어도 수업 일정이 유지 되어야 합니다.

<br/>

## 9. 프로젝트 설치 및 실행

### 9.1. Git Clone

```shell
$ git clone
```

### 9.2. 프로젝트 실행

```shell
$ npm install
$ npm start
```

<br/>

## 10. 회의록

- [25일차 💬](https://www.notion.so/25-ddcb25a107c94a4ba8bb15e9100f079e)
- [26일차 💬 ](https://www.notion.so/26-f934c378fbb34fa6ad2b9d3c617ad6b4)

<br/>

## 11. 프로젝트 결과물

### 11.1. 메인 페이지 - 주간 테이블

![메인](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_2/main.png?raw=true)

### 11.2. 메인페이지 - 수업 스케쥴 삭제 기능 

![delet](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_2/delete.png?raw=true)



### 11.3. 수업 일정 추가 페이지 - 날짜 및 시간 선택

![](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_2/add.png?raw=true)

### 11.4. 수업 일정 추가 페이지 - 수업 일정 추가

![](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/week4_2/add%202.png?raw=true)
