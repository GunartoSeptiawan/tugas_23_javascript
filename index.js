var angka =[32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

var result = angka.filter(function(element){
  return element > 15;
});

console.log(result);