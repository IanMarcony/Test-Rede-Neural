class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = [];

    for (let i = 0; i < rows; i++) {
      let arr = [];
      for (let j = 0; j < cols; j++) {
        arr.push(Math.floor(Math.random() * 10));
      }
      this.data.push(arr);
    }
  }
  // Funções Diversas

  static transpose(A) {
    var matrix = new Matrix(A.cols, A.rows);
    return matrix.map((item, i, j) => {
      return A.data[j][i];
    });
  }

  static arrayToMatrix(arr) {
    let matrix = new Matrix(arr.length, 1);
    return matrix.map((item, i, j) => {
      return arr[i];
    });
  }
  static matrixToArray(mtx) {
    let arr = [];
    mtx.map((item, i, j) => {
      arr.push(item);
    });

    return arr;
  }

  print() {
    console.table(this.data);
  }
  randomize() {
    this.map((item, i, j) => {
      return Math.random() * 2 - 1;
    });
  }

  map(func) {
    this.data = this.data.map((arr, i) => {
      return arr.map((num, j) => {
        return func(num, i, j);
      });
    });

    return this;
  }
  // Operações Estáticas Matriz X Escalar
  static escalar_multiply(A, escalar) {
    var matrix = new Matrix(A.rows, A.cols);
    return matrix.map((item, i, j) => {
      return A.data[i][j] * escalar;
    });
  }
  // Operações Estáticas Matriz X Matriz
  static map(A, func) {
    let matrix = new Matrix(A.rows, A.cols);

    matrix.data = matrix.data.map((arr, i) => {
      return arr.map((num, j) => {
        return func(num, i, j);
      });
    });

    return matrix;
  }

  static hadamard(A, B) {
    var matrix = new Matrix(A.rows, B.cols);
    return matrix.map((item, i, j) => {
      return A.data[i][j] + B.data[i][j];
    });
  }

  static add(A, B) {
    var matrix = new Matrix(A.rows, B.cols);
    return matrix.map((item, i, j) => {
      return A.data[i][j] + B.data[i][j];
    });
  }
  static subtract(A, B) {
    var matrix = new Matrix(A.rows, B.cols);
    return matrix.map((item, i, j) => {
      return A.data[i][j] - B.data[i][j];
    });
  }

  static multiply(A, B) {
    var matrix = new Matrix(A.rows, B.cols);
    return matrix.map((num, i, j) => {
      let sum = 0;
      for (let k = 0; k < A.cols; k++) {
        let item1 = A.data[i][k];
        let item2 = B.data[k][j];

        sum += item1 * item2;
      }
      return sum;
    });
  }
}

module.exports = Matrix;
