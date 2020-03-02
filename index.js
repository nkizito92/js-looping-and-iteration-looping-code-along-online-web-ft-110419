
function writeCards(arry, bird) {
  let array = []
  for (let i = 0; i < arry.length; i++) {
  array = [console.log(`Thank you, ${arry[i]} for the wonderful ${bird} gift!`)]
  }
  return array
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");