{
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Circle = {
    shape: "circle";
    radius: number;
  };

  function calculateShapeArea(param: Circle | Rectangle): number {
    let area: number = 0;

    if (param.shape === "circle") {
      area = 3.14159 * param.radius * param.radius;
    }
    if (param.shape === "rectangle") {
      area = param.height * param.width;
    }
    let floatArea = parseFloat(area.toFixed(2));
    return floatArea;
  }

  const result1 = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(result1);

  const result2 = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(result2);
}
