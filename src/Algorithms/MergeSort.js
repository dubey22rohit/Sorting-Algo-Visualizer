 export const mergeSortFunction = (array) => {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const firstHalf = mergeSortFunction(array.slice(0, mid));
  const secondHalf = mergeSortFunction(array.slice(mid));
  const ans = [];
  let i = 0,
    j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      ans.push(firstHalf[i++]);
    } else {
      ans.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) {
    ans.push(firstHalf[i++]);
  }
  while (j < secondHalf.length) {
    ans.push(secondHalf[j++]);
  }
  return ans;
};
// let array = [5,4,1,15,10,50,25];
// console.log(mergeSortFunction(array))