# Wanted Pre-Onboarding FE #4-2. (잉그올 기업과제)

<br/>

## 목차

1. 프로젝트 소개
2. 역할
3. 프로젝트 요약
4. 폴더 구조
5. 기능 구현
6. 프로젝트 설치 및 실행
7. 회의록
8. 프로젝트 결과물

## 1. 프로젝트 소개

> 개요 : 원티드 프리온보딩 5기 4주차 다섯 번 째 팀 과제
>
> 주제 : 잉그올 기업과제 - 수업 일정 페이지
>
> 기간 : 2022.07.28 ~ 2022.07.30

## 2. 역할

|                   이름                    | 직책 | 역할                                                                                                    |
| :---------------------------------------: | :--: | :------------------------------------------------------------------------------------------------------ |
| [엄일경](https://github.com/sunaerocket)  | 팀장 | 📌데이터 기본값 JSON 파일 작성 <br/>📌수업 보기 페이지 - 수업 삭제 기능, 수업 조회 기능                 |
|  [추연빈](https://github.com/chuyeonbin)  | 팀원 | 📌통신 모듈 작성<br />📌테이블 데이터 다운로드 기능 구현<br />                                          |
| [임은지](https://github.com/salangdung-i) | 팀원 | 📌레이아웃 - 수업 보기 페이지, 수업 추가 페이지 <br /> 📌라우터<br/>📌공통 컴포넌트 - 카드 , 버튼<br /> |
|  [오태권](https://github.com/ohtaekwon)   | 팀원 | 📌수업 추가 페이지 - 저장 기능<br/>📌데이터 타입 설정하기                                               |
|    [이진희](https://github.com/bebusl)    | 팀원 | 📌json-server 세팅<br />📌수업 추가 페이지 - 반복 설정 기능 <br />📌서버 요청 시 강제 새로고침 버그 수정                                      |
| [문성운](https://github.com/corgi-world)  | 팀원 | 📌수업 추가 페이지 - 새로고침 해도 데이터 유지하기 <br />📌수업 추가 페이지 - 시작 시간 설정 기능<br/>📌일정 중첩 방지 기능       |

## 3. 프로젝트 요약

## 4. 프로젝트 구조

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

## 5. 기능 구현

### 5.1. 주간 테이블

- [x] 주간 일정 데이터를 가져와 요일 시간 별로 노출합니다.
- [x] 날짜는 표시되지 않습니다.
- [x] 각 일정은 x버튼을 누르면 삭제 되어야 합니다.
- [x] add class schedule 버튼을 누르면 수업 일정추가 페이지로 이동합니다.

### 5.2. 수업 일정 추가

- [x] 수업 일정 추가 버튼을 누르면 수업 일정 추가가 열립니다.
- [x] 수업 일정 추가 페이지에서 시작시간을 선택할 수 있습니다.
- [x] 시작시간은 5분 간격으로 제한됩니다.
- [x] 시작 시간의 범위는 0~23시까지 입니다.
- [x] 수업 시간은 항상 40분입니다.
- [x] 수업 일정을 추가할 때 똑같은 시간에 여러 요일을 선택할 수 있습니다.
- [x] 저장 버튼을 누르면 수업 일정 보기로 돌아갑니다.(주간 테이블)
- [x] 새로 추가된 일정이 주간 테이블에 노출됩니다.
- [x] 페이지가 다시 로드 되어도 수업 일정이 유지 되어야 합니다.

## 6. 프로젝트 설치 및 실행

## 7. 회의록

- [25일차 💬](https://www.notion.so/25-ddcb25a107c94a4ba8bb15e9100f079e)

- [26일차 💬 ](https://www.notion.so/26-f934c378fbb34fa6ad2b9d3c617ad6b4)

## 8. 프로젝트 결과물
