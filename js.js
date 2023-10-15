'use strict';
//
// Домашнее задание
//
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
//     найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
console.log(Math.max(...arr)); //max(1, 5, 7, 9);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
//     а не напрямую.

const createCounter = () => {
    let counter = 0;
    return {
        increment: () => {
            counter++;
        },
        decrement: () => {
            counter--;
        },
        get value() {
            return counter;
        }
    }
}
// презентация функционала в консоли
const counter = createCounter();
console.log(counter.value);
counter.increment();
console.log(counter.value);
counter.decrement();
console.log(counter.value);

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
//     Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.


const findElementByClass = (rootElement, className) => {
    if (rootElement.classList.contains(className)) {
        return rootElement;
    }
    for (let i = 0; i < rootElement.children.length; i++) {
        const result = findElementByClass(rootElement.children[i], className);
        if (result) {
            return result;
        }
    }
    return null;
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement,'got');
console.log(targetElement);

//
//     Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);