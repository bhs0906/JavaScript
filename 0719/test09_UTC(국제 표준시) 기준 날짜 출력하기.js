// UTC(국제 표준시) 기준 날짜 출력하기

const date = new Date();
const dateUTC = Date.UTC(
  date.getUTCFullYear(),
  date.getUTCMonth(),
  date.getUTCDate(),
  date.getUTCHours(),
  date.getUTCMinutes(),
  date.getUTCSeconds()
);

console.log(new Date(dateUTC));
// 2022-07-19T06:31:33.000Z