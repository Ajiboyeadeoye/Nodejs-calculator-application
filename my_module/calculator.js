export function add(a, b) {
    return a + b;
};

export function subtract(a, b) {
    if (a > b) {
        return a - b;
    }
    if (a < b ){
        return -(a - b);
    }
    return 0;
};

export function multiply(a, b) {
    return a * b;
};

export function divide(a, b) {
    if (b == 0) {
        return "undefined"
    }else {
        return a / b;
    }
    
};

