const dic = {
  boy : "소년",
  girl : "소녀",
  friend : "친구",
  present : "현재"
};

console.log(dic.present);
dic.present = "선물";
console.log(dic.present);

// dic 이라는 객체가 상수인 것, 안에 있는 값이 상수인 것은 아님

// dic = { }; 
// 에러 발생, dic 이라는 객체를 바꿀 수 없음

