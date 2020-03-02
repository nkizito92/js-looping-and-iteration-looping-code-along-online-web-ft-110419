
function writeCards(arry, bird) {
  for (let i = 0; i < arry.length; i++) {
  const array = []
    array.push(`Thank you, ${arry[i]} for the wonderful ${bird} gift!`)
  }
  return array
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");