{
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    let value: number = 0;

    keys.forEach((key) => {
      key in obj ? null : (value = 1);
    });

    return value > 0 ? false : true;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  console.log(validateKeys(person, ["name", "age"]));
}
