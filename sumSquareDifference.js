class SumOfASquare {
    constructor(num){
        this._num = num;
    }
    sumOfSquares(){
        let sum = 0;
        for (let i = 1; i <= this._num; i++){
            sum += i * i;
        }
        return sum;
    }
    squareOfTheSums(){
        let sum = 0;
        for (let i = 1; i <= this._num; i++){
            sum += i;
        }
        return sum * sum;
    }
}

module.exports = {SumOfASquare}