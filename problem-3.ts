{
  function countWordOccurrences(param1: string, param2: string): number {
    const lowerCaseParam1: string = param1.toLowerCase();
    const lowerCaseParam2: string = param2.toLowerCase();

    const singleWord: string[] = lowerCaseParam1.split(/\s+|[.,!?;:"()-]+/);

    let count = 0;

    for (const solo of singleWord) {
      if (solo === lowerCaseParam2) {
        count++;
      }
    }
    return count;
  }

  const result = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );

  console.log(result);
}
