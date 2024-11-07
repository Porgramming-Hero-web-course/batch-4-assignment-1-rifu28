{
  function getProperty<T, K extends keyof T>(param1: T, param2: K): T[K] {
    const output = param1[param2];
    return output;
  }
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
}
