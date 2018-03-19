
// extends 关键字用于类声明或类表达式中，以创建一个类，该类是另一个类的子类(参考: MDN)。 子类继承超类的所有属性，另外可以添加新属性或修改继承的属性。

// super 关键字用于调用对象的父对象的函数，包括其构造函数。

// super 关键字必须在构造函数中使用 this 关键字之前使用。
// 调用 super() 调用父类构造函数。 如果要将类的构造函数中的一些参数传递给其父构造函数，则可以使用 super(arguments) 来调用它。
// 如果父类有一个 X 的方法（甚至静态），可以使用 super.X() 在子类中调用。

class Polygon {
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }
  
    getHelloPhrase() {
      return `Hi, I am a ${this.name}`;
    }
  }
  
  class Square extends Polygon {
    constructor(length) {
      // 这里，它调用父类的构造函数的 length, 
      // 提供给 Polygon 的 width 和 height。
      super(length, length);
      // 注意: 在派生的类中, 在你可以使用 'this' 之前, 必须先调用 super() 。
      // 忽略这个, 这将导致引用错误。
      this.name = 'Square';
      this.length = length;
    }
  
    getCustomHelloPhrase() {
      const polygonPhrase = super.getHelloPhrase(); // 通过 super.X() 语法访问父级方法
      return `${polygonPhrase} with a length of ${this.length}`;
    }
  
    get area() {
      return this.height * this.width;
    }
  }
  
  const mySquare = new Square(10);
  console.log(mySquare.area) // 100
  console.log(mySquare.getHelloPhrase()) // 'Hi, I am a Square' -- Square 继承自 Polygon 并可以访问其方法
  console.log(mySquare.getCustomHelloPhrase()) // 'Hi, I am a Square with a length of 10'class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  getHelloPhrase() {
    return `Hi, I am a ${this.name}`;
  }
}

class Square extends Polygon {
  constructor(length) {
    // 这里，它调用父类的构造函数的 length, 
    // 提供给 Polygon 的 width 和 height。
    super(length, length);
    // 注意: 在派生的类中, 在你可以使用 'this' 之前, 必须先调用 super() 。
    // 忽略这个, 这将导致引用错误。
    this.name = 'Square';
    this.length = length;
  }

  getCustomHelloPhrase() {
    const polygonPhrase = super.getHelloPhrase(); // 通过 super.X() 语法访问父级方法
    return `${polygonPhrase} with a length of ${this.length}`;
  }

  get area() {
    return this.height * this.width;
  }
}

const mySquare = new Square(10);
console.log(mySquare.area) // 100
console.log(mySquare.getHelloPhrase()) // 'Hi, I am a Square' -- Square 继承自 Polygon 并可以访问其方法
console.log(mySquare.getCustomHelloPhrase()) // 'Hi, I am a Square with a length of 10'