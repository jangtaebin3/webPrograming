let user = {
  id : "jtbc",
  password : "1234",
  name : "Jang Taebin",
  mobile : "010-1234-5678",
  country : "대한민국"
}

for(let info in user) {
  console.log(`${info} : ${user[info]}`);
}