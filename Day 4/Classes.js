/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(lengths) {
        var peri_meter = 0;
        for (var i in lengths)
        {
            peri_meter += lengths[i];
        }
        this.my_perimeter = peri_meter;
    }
    perimeter() {
        return this.my_perimeter;
    }
}