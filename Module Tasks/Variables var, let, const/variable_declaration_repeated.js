function Var(){
  var x = 10
  console.log(x)//выведет 10
  var x = 20
  console.log(x)//выведет 20
}
function Let(){
  let y = 10
  console.log(y)//выведет 10
  try {
      let y = 20//Ошибка: Identifier 'y' has already been declared
      console.log(y)
  } catch (e) {
      console.error(e.message)//Identifier 'y' has already been declared
  }
}
function Const(){
  const z = 10
  console.log(z)//выведет 10
  try {
      const z = 20//Ошибка: Identifier 'z' has already been declared
      console.log(z)
  } catch (e) {
      console.error(e.message)//Identifier 'z' has already been declared
  }
}
