class Mathematic {
  static sum(a: number, b: number) {
    return a + b;
  }

  static sumMany(numbers: number[]) {
    let result = 0;

    numbers.forEach((number) => {
      result += number;
    });

    return result;
  }

  static divide(a: any, b: any) {
    return a / b;
  }
}

// const math = new Mathematic();

console.log(Mathematic.sumMany([1, 2, 3, 4, 5, 6]));
