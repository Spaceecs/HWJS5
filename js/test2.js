function Fraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.")
    }
    this.numerator = numerator
    this.denominator = denominator
}
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}
Fraction.prototype.simplify = function () {
    const divisor = gcd(Math.abs(this.numerator), Math.abs(this.denominator))
    this.numerator /= divisor
    this.denominator /= divisor
    if (this.denominator < 0) {
        // Переносимо знак мінуса в чисельник
        this.numerator = -this.numerator
        this.denominator = -this.denominator
    }
    return this;
}
Fraction.prototype.add = function (other) {
    const numerator =
        this.numerator * other.denominator + other.numerator * this.denominator
    const denominator = this.denominator * other.denominator
    return new Fraction(numerator, denominator).simplify()
}
Fraction.prototype.subtract = function (other) {
    const numerator =
        this.numerator * other.denominator - other.numerator * this.denominator
    const denominator = this.denominator * other.denominator
    return new Fraction(numerator, denominator).simplify()
}
Fraction.prototype.multiply = function (other) {
    const numerator = this.numerator * other.numerator
    const denominator = this.denominator * other.denominator
    return new Fraction(numerator, denominator).simplify()
}
Fraction.prototype.divide = function (other) {
    if (other.numerator === 0) {
        throw new Error("Cannot divide by zero.")
    }
    const numerator = this.numerator * other.denominator
    const denominator = this.denominator * other.numerator
    return new Fraction(numerator, denominator).simplify()
}
const fraction1 = new Fraction(3, 4)
const fraction2 = new Fraction(2, 5)
const sum = fraction1.add(fraction2)
alert(`Sum: ${sum.numerator}/${sum.denominator}`)
const difference = fraction1.subtract(fraction2)
alert(`Difference: ${difference.numerator}/${difference.denominator}`)
const product = fraction1.multiply(fraction2)
alert(`Product: ${product.numerator}/${product.denominator}`)
const quotient = fraction1.divide(fraction2)
alert(`Quotient: ${quotient.numerator}/${quotient.denominator}`)
