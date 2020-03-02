
  const array = []
function writeCards(arry, bird) {
  for (let i = 0; i < arry.length; i++) {
  array.push(console.log(`Thank you, ${arry[i]} for the wonderful ${bird} gift!`))
  }
  return array
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");