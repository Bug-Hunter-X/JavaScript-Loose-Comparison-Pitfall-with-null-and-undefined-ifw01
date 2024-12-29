function foo(x) {
  if (x == null) {
    return 0; //This will not work as expected
  }
  return x + 1;
}
console.log(foo(null)); //Outputs 1 instead of 0
console.log(foo(undefined)); //Outputs NaN instead of 0