
function writeCards(arry, bird) {
  for (let i = 0; i < arry.length; i++) {
    console.log(`Thank you, ${arry[i]} for the wonderful ${bird} gift!`)
  }
  return arry
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");