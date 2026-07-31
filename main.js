let input = document.getElementsByTagName("input")[0];
let result = document.getElementsByTagName("div")[0];
input.onclick = function () {
  return (result.innerHTML = `${input.value} USD Dollar = ${(input.value * 15.6).toFixed(2)} Egyptian Pound`);
};
