function burrower(array) {
  return array.reduce((a, b) => {
    return a.concat(Array.isArray(b) ? burrower(b) : b);
  }, []);
}


function sumItems(array) {
  return burrower(array).reduce((a, b) => {
    return a + b
  }, 0);
}
module.exports = sumItems;



console.log(burrower([[1, 2, [[3], 4]], 5, []]))
