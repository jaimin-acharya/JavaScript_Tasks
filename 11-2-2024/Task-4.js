// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
// 
function areaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area.toFixed(2); 
}

console.log("Area of triangle:", areaOfTriangle(5, 6, 7));
