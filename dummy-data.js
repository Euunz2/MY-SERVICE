/* ---------------------------------------------------------------
   정산 더미 데이터 — 전부 지어낸 값입니다. 실제 자료가 아닙니다.
   고객사명 / 강사명 / 계좌번호 모두 가짜입니다.

   칸 순서와 계산 규칙
     고객사   client
     교육명   course
     교육일자 date (+ day 요일)
     강사     instructor
     강사료   feeRate    시간당 단가
     시수     feeHours
     금액(a)  amountA    = feeRate × feeHours      … 고객사 청구 기준
     사업비   opsRate    시간당 단가
     시수     opsHours
     금액(b)  amountB    = opsRate × opsHours      … 사업비 집행 기준, 강사 실지급 대상
     원천세   tax        = amountB × 3.3%
     정산액   payout     = amountB − tax           … (b-1)
     계좌번호 account
     은행     bank

   status 는 요청한 14칸에 없지만, 퀘스트 화면이 "정산완료가 아닌 건"만
   추리는 데 필요해서 덧붙였습니다. 값은 미정산 / 정산요청 / 정산완료 셋뿐입니다.
---------------------------------------------------------------- */

var SETTLEMENTS = [

  /* ------------------------------ 9월 ------------------------------ */

  {
    client: '(주)한빛금융그룹',
    course: 'M1 데이터 리터러시 기초',
    date: '2025-09-03', day: '수',
    instructor: '김도현',
    feeRate: 100000, feeHours: 7, amountA: 700000,
    opsRate:  90000, opsHours: 7, amountB: 630000,
    tax: 20790, payout: 609210,
    account: '123456-04-567890', bank: '국민은행',
    status: '정산완료'
  },
  {
    client: '(주)한빛금융그룹',
    course: 'M2 금융 데이터 다루기',
    date: '2025-09-04', day: '목',
    instructor: '박서연',
    feeRate: 100000, feeHours: 7, amountA: 700000,
    opsRate:  90000, opsHours: 7, amountB: 630000,
    tax: 20790, payout: 609210,
    account: '110-234-567891', bank: '신한은행',
    status: '정산완료'
  },
  {
    client: '(주)한빛금융그룹',
    course: 'M4 기획자를 위한 금융데이터 활용 실무',
    date: '2025-09-05', day: '금',
    instructor: '최유라',
    feeRate: 110000, feeHours: 7, amountA: 770000,
    opsRate: 100000, opsHours: 7, amountB: 700000,
    tax: 23100, payout: 676900,
    account: '158-910234-56701', bank: '하나은행',
    status: '미정산'
  },
  {
    client: '세종에듀테크(주)',
    course: 'M3 리스크 데이터 이해',
    date: '2025-09-11', day: '목',
    instructor: '이준호',
    feeRate: 100000, feeHours: 6, amountA: 600000,
    opsRate:  85000, opsHours: 6, amountB: 510000,
    tax: 16830, payout: 493170,
    account: '1002-345-678912', bank: '우리은행',
    status: '미정산'
  },
  {
    client: '세종에듀테크(주)',
    course: 'M5 데이터 기반 서비스 기획',
    date: '2025-09-12', day: '금',
    instructor: '정민아',
    feeRate: 120000, feeHours: 7, amountA: 840000,
    opsRate: 105000, opsHours: 7, amountB: 735000,
    tax: 24255, payout: 710745,
    account: '3333-05-6789123', bank: '카카오뱅크',
    status: '정산요청'
  },
  {
    client: '한국핀테크협회',
    course: 'M6 금융 규제와 데이터',
    date: '2025-09-19', day: '금',
    instructor: '한지훈',
    feeRate: 90000, feeHours: 7, amountA: 630000,
    opsRate: 80000, opsHours: 7, amountB: 560000,
    tax: 18480, payout: 541520,
    account: '302-4567-8912-31', bank: '농협은행',
    status: '정산요청'
  },
  {
    client: '(주)미래로데이터',
    course: 'M7 대시보드로 보고하기',
    date: '2025-09-25', day: '목',
    instructor: '오세영',
    feeRate: 100000, feeHours: 7, amountA: 700000,
    opsRate:  95000, opsHours: 7, amountB: 665000,
    tax: 21945, payout: 643055,
    account: '245-678912-01-013', bank: '기업은행',
    status: '미정산'
  },

  /* ------------------------------ 10월 ------------------------------ */

  {
    client: '(주)그린캐피탈',
    course: 'M8 AI로 문서 자동화',
    date: '2025-10-02', day: '목',
    instructor: '배수민',
    feeRate: 120000, feeHours: 7, amountA: 840000,
    opsRate: 110000, opsHours: 7, amountB: 770000,
    tax: 25410, payout: 744590,
    account: '1000-1234-5678', bank: '토스뱅크',
    status: '미정산'
  },
  {
    /* 반일 과정. 시수가 짧은 건이 섞였을 때 표가 어떻게 보이는지 확인용입니다. */
    client: '(주)그린캐피탈',
    course: 'M9 데이터 시각화 실무',
    date: '2025-10-10', day: '금',
    instructor: '문태경',
    feeRate: 110000, feeHours: 5, amountA: 550000,
    opsRate: 100000, opsHours: 5, amountB: 500000,
    tax: 16500, payout: 483500,
    account: '987654-01-234567', bank: '국민은행',
    status: '정산요청'
  },
  {
    client: '대한상공회의소 서울지부',
    course: 'M10 고객 데이터 분석',
    date: '2025-10-17', day: '금',
    instructor: '류해린',
    feeRate: 100000, feeHours: 7, amountA: 700000,
    opsRate:  90000, opsHours: 7, amountB: 630000,
    tax: 20790, payout: 609210,
    account: '110-345-678923', bank: '신한은행',
    status: '정산완료'
  },
  {
    /* 두 시수가 서로 다른 건. a는 7시수, b는 6시수로 잡혔습니다. */
    client: '대한상공회의소 서울지부',
    course: 'M11 실습 프로젝트 코칭',
    date: '2025-10-24', day: '금',
    instructor: '신도윤',
    feeRate: 90000, feeHours: 7, amountA: 630000,
    opsRate: 85000, opsHours: 6, amountB: 510000,
    tax: 16830, payout: 493170,
    account: '158-910234-56789', bank: '하나은행',
    status: '미정산'
  },
  {
    /* 단가가 높고 시수가 짧은 건. 금액 열 정렬 확인용입니다. */
    client: '(주)미래로데이터',
    course: 'M12 성과 측정과 리포팅',
    date: '2025-10-31', day: '금',
    instructor: '장예은',
    feeRate: 150000, feeHours: 4, amountA: 600000,
    opsRate: 130000, opsHours: 4, amountB: 520000,
    tax: 17160, payout: 502840,
    account: '1002-456-789234', bank: '우리은행',
    status: '미정산'
  }

];
