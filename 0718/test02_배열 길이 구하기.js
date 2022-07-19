// 배열 길이 구하기 (length)

const ship = {
  max: 4,
  passengers: [],
  onBoard: function (name) {
    if (this.passengers.length === 4) {
      console.log(`This ship is full. ${name} can not board this ship.`);
    //console.log(`배의 정원이 가득찼습니다.. ${name} 님은 배에 승선할 수 없습니다..`)
    } else {
      this.passengers.push(name);
      console.log(`${name} boarded.`);
    }
  },
};

ship.onBoard("chloe");
ship.onBoard("jay");
ship.onBoard("david");
ship.onBoard("asher");
ship.onBoard("daniel");
console.log(ship.passengers);