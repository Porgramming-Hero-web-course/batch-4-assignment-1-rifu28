{
  function removeDuplicates(param: number[]): number[] {
    let newArray: number[] = [];
    for (let i = 0; i < param.length; i++) {
      if (!newArray.includes(param[i])) {
        newArray.push(param[i]);
      }
    }
    return newArray;
  }

  const result = removeDuplicates([1, 2, 2, 4, 4, 3, 5, 6]);
  console.log(result);
}
