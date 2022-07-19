// 배열 순환하기 (forEach)

// 배열.forEach(callback 함수)

const arr = [
    { id: 0, name: "혜림", age: 2 },
    { id: 1, name: "현일", age: 3 },
    { id: 2, name: "현아", age: 8 },
    { id: 3, name: "우림", age: 5 },
  ];
  
  arr.forEach((el) => {
    console.log(el.name);
  });