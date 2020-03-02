
function writeCards(arry, bird) {
  let array = [];
  for (let i = 0; i < arry.length; i++) {
    array.push(`Thank you, ${arry[i]} for the wonderful ${bird} gift!`);
  }
  return array;
}
