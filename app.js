import {add, subtract, multiply, divide } from './my_module/calculator.js';
import readline from 'readline';
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        console.log(`Addition result: ${add(Number(num1), Number(num2))}`);
        console.log(`Subtraction result: ${subtract(Number(num1), Number(num2))}`);
        console.log(`Multiplication result: ${multiply(Number(num1), Number(num2))}`);
        console.log(`Division result: ${divide(Number(num1), Number(num2))}`);
        rl.close();
    });
})